//Todos los controllers para games

const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const { Op } = require('sequelize');
const { Videogame, Genre } = require('../db')
const { getGenresFromApi } = require('./genresController')
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
            genres: game.genres.map(genre => ({
                name: genre.name
            }))
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
            description: response.data.description,
            genres: response.data.genres.map(genre => ({
                name: genre.name
            }))
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
                [Op.iLike]: `%${name}%`,
            }
        },
        include: [{ model: Genre, attributes: ['name'], through: { attributes: [] } }],
        limit: 15
    });

    const combinedGames = [...apiGames, ...dbGames];
    const first15Games = combinedGames.slice(0,15) //limita la llamada a 15 juegos solamente
    return first15Games.map(game => ({
        id: game.id,
        name: game.name,
        platforms: game.platforms.map(platform => ({
            name: platform.platform.name,
        })),
        released: game.released,
        image: game.background_image,
        rating: game.rating,
        genres: game.genres.map(genre => ({
            name: genre.name
        }))
        
    }));
};

// const getGameByName = async (name) => {
//     const apiResponse = await axios.get(`${URL}?key=${API_KEY}&search=${name}`);
//     const apiGames = apiResponse.data.results;

   
//     const dbGames = await Videogame.findAll({
//         where: {
//             name: {
//                 [Op.iLike]: `%${name}%`,
//             }
//         },
//         include: [
//             { 
//                 model: Genre, 
//                 attributes: ['name'], 
//                 through: { attributes: [] } 
//             }
//         ],
//         limit: 15
//     });

//     const combinedGames = [...apiGames, ...dbGames];
//     const first15Games = combinedGames.slice(0, 15);

//     return first15Games.map(game => {
//         const platforms = game.platforms.map(platform => ({ name: platform.platform.name }));
//         const genres = game.genres
//             .map(genre => ({ name: genre.name }))
//             .sort((a, b) => a.name.localeCompare(b.name)); // Sort genres alphabetically

//         return {
//             id: game.id,
//             name: game.name,
//             platforms: platforms,
//             released: game.released,
//             image: game.background_image,
//             rating: game.rating,
//             genres: genres
//         };
//     });
// };



const postNewGame = async ({ name, description, platforms, released, image, rating, genres }) => {
    
    const gameToAdd = await Videogame.create({
        
        name,
        description,
        platforms,
        released,
        image,
        rating,
    });
    console.log('Game added:', gameToAdd.toJSON());
    const selectedGenres = await Genre.findAll({
        where: {
          name: {
             [Op.in]: genres,
          },
        },
      });

      console.log('Selected genres:', selectedGenres.map(genre => genre.toJSON()));
  
      await gameToAdd.addGenres(selectedGenres); //Se crea al hacer una relacion many to many
      console.log('Genres added to game.');
      const relationGame = await Videogame.findOne({
        where: {id: gameToAdd.id},
        include:[{model :Genre, attributes: ["name"], through: {attributes: []}}]
    })

    return relationGame;
};



module.exports = { getAllGames, getGameByID, getGameByName, postNewGame }