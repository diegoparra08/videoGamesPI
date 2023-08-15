//Todos los controllers para games

const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const { Op } = require('sequelize');
const { Videogame } = require('../db')
const URL = 'https://api.rawg.io/api/games'


const getAllGames = async () => {

    const promises = [];
    const games = [];

    for (let i = 1; i < 6; i++) {
        promises.push(axios.get(`${URL}?key=${API_KEY}&page=${i}`));
    }

    const responses = await Promise.all(promises);

    responses.forEach(response => {
        const results = response.data.results.map(game => ({
            id: game.id,
            name: game.name,
            platforms: game.platforms.map(platform => ({
                name: platform.platform.name,
            })),
            released: game.released,
            image: game.background_image,
            rating: game.rating,
        }));

        games.push(...results);
    });
    console.log(games.length);
    return games;

};

const getGameByID = async (id) => {

    if (/^[0-9]+$/.test(id)) {
        const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
        const gameDetail = {
            id: response.data.id,
            name: response.data.name,
            platforms: response.data.platforms.map(platform => ({
                name: platform.platform.name,
            })),
            released: response.data.released,
            image: response.data.background_image,
            rating: response.data.rating,
        };
        return gameDetail;

    }

    if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(id)) {
        // Si el ID es un UUID, busca en la base de datos
        const game = await Videogame.findByPk(id);
        if (!game) {
            throw new Error('Game not found in the database.');
        }
        return game;
    } else {
        throw new Error('Invalid ID format.');
    }
};

const getGameByName = async (name) => {
    const apiResponse = await axios.get(`${URL}?key=${API_KEY}&search=${name}`)

    const apiGames = apiResponse.data.results;

    const dbGames = await Videogame.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`, // Busca el nombre independientemente de mayúsculas o minúsculas
            }
        },
        limit: 15
    });

    const combinedGames = [...apiGames, ...dbGames];
    return combinedGames.map(game => ({
        id: game.id,
        name: game.name,
        platforms: game.platforms.map(platform => ({
            name: platform.platform.name,
        })),
        released: game.released,
        image: game.background_image,
        rating: game.rating,
    }));
};

const postNewGame = async ({ name, description, platforms, released, image, rating }) => {

    const gameToAdd = await Videogame.create({
        
        name,
        description,
        platforms,
        released,
        image,
        rating,
    });
    return gameToAdd;
};



module.exports = { getAllGames, getGameByID, getGameByName, postNewGame }