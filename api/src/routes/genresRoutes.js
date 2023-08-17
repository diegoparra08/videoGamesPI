const getGenre = require('../handlers/genresHandler');
const routerGenres = require('express').Router();

routerGenres.get('/', getGenre);

module.exports = routerGenres;