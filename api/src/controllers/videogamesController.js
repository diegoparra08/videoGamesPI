const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const { Op } = require('sequelize');
const { Videogame, Genre } = require('../db')
const URL = 'https://api.rawg.io/api/games'


const mapGame = (game) => ({
    id: game.id,
    name: game.name,
    platforms: game.platforms.map(platform => ({
        name: platform.platform.name,
    })),
    released: game.released,
    image: game.background_image,
    rating: game.rating,
    genres: game.genres.map(genre => ({
        name: genre.name,
        id: genre.id
    }))
});

const mapGamesList = (games) => games.map(mapGame);

const getAllGames = async () => {

    const promises = [];
    const games = [];

    for (let i = 1; i < 6; i++) {
        promises.push(axios.get(`${URL}?key=${API_KEY}&page=${i}`));
    }

    const responses = await Promise.all(promises);

    responses.forEach(response => {
        const results = response.data.results.map(game => mapGame(game));
        games.push(...results);
    });

    const dbGames = await Videogame.findAll({
        include: [{ model: Genre, attributes: ['name', 'id'], through: { attributes: [] } }],
    });

    const combinedGames = [...games, ...dbGames];
    console.log(combinedGames.length);
    return combinedGames;
};

const getGameByID = async (id) => {

    function removeHtmlTags(input) {
        return input.replace(/<\/?[^>]+(>|$)/g, ""); 
    }

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
            description: removeHtmlTags(response.data.description),
            genres: response.data.genres.map(genre => ({
                name: genre.name,
                id: genre.id
            }))
        };
        return gameDetail;

    }

    if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(id)) {
   
        const game = await Videogame.findOne({
            where: { id },
            include: [{ model: Genre, attributes: ["name", "id"], through: { attributes: [] } }] //incluye el genre al buscar el juego
        });
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

    const apiGames = apiResponse.data.results
    .slice(0, 15) 
    .map(game => mapGame(game));

const dbGames = await Videogame.findAll({
    where: {
        name: {
            [Op.eq]: name,
        }
    },
    include: [{ model: Genre, attributes: ['name', 'id'], through: { attributes: [] } }],
    limit: 15 
});

const combinedGames = [...apiGames, ...dbGames];

return combinedGames;
};


const postNewGame = async ({ name, description, platforms, released, image, rating, genres }) => {
   
    const parsedRating = parseFloat(rating);

    const gameToAdd = await Videogame.create({
        
        name,
        description,
        platforms,
        released,
        image,
        rating: parsedRating,
        
    });
   
    const selectedGenres = await Genre.findAll({
        where: {
          name: {
             [Op.in]: genres,
          },
        },
      });
  
      await gameToAdd.addGenres(selectedGenres); 
  
      const relationGame = await Videogame.findOne({
        where: {id: gameToAdd.id},
        include:[{model :Genre, attributes: ["name", "id"], through: {attributes: []}}]
    })

    return relationGame;
};



module.exports = { getAllGames, getGameByID, getGameByName, postNewGame }