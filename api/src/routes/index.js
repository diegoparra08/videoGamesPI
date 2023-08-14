const { default: axios } = require('axios');
const { Router } = require('express');
const routerVideoGames = require('./videogamesRoutes')
const routerGenres = require('./genresRoutes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', routerVideoGames);
router.use('/genres', routerGenres);


//! En este archiv creare las rutas. Los controllers y handlers vendran de otro archivo luego. 


module.exports = router;
