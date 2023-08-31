const { default: axios } = require('axios');
const { Router } = require('express');
const routerVideoGames = require('./videogamesRoutes')
const routerGenres = require('./genresRoutes')



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', routerVideoGames);
router.use('/genres', routerGenres);



module.exports = router;
