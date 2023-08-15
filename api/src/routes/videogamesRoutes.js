const { getAll, getByID } = require('../handlers/videogaesHandler');
const routerVideoGames = require('express').Router();

routerVideoGames.get('/', getAll);
routerVideoGames.get('/:id', getByID);


module.exports = routerVideoGames;