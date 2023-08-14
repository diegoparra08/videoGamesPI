const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;

const getAllGenres = async() => {

    const response = await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const genres = response.data;

    return genres;
     

}

module.exports = {getAllGenres}