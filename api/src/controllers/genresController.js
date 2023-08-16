const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const { Genre } = require('../db')

const getGenresFromApi = async() => {

    const response = await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const genres = response.data.results;

    const genresToInsert = genres.map(genre => ({
        id: genre.id,
        name: genre.name
    }));

    await Genre.bulkCreate(genresToInsert, { ignoreDuplicates: true });
       
    return genresToInsert;
};

const getGenresFromDB = async() => {

    return await Genre.findAll();

};

module.exports = {getGenresFromApi, getGenresFromDB}