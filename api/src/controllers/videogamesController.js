//Todos los controllers para games

const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
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

}


module.exports = { getAllGames }