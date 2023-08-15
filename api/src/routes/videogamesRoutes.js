const { getAll, getByID, postGame } = require('../handlers/videogaesHandler');
const routerVideoGames = require('express').Router();

routerVideoGames.get('/', getAll);
routerVideoGames.get('/:id', getByID);
routerVideoGames.post('/', postGame);


module.exports = routerVideoGames;