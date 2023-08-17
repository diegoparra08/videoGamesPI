const { getAllGames, getGameByID, getGameByName, postNewGame } = require('../controllers/videogamesController');

const getAll = async (req, res) => {
    const { name } = req.query;

    try {
        if (name) {
            const gamesFound = await getGameByName(name);
            if (gamesFound.length === 0) {
                return res.status(404).json({ message: `Not matches were found for ${name}` })
            } else {
                console.log(gamesFound.length);
                return res.status(201).json(gamesFound);
            }
        } else {
            const games = await getAllGames();
            return res.status(201).json(games);
        }

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

const getByID = async (req, res) => {
    const { id } = req.params;

    try {
        if (!id) {
            throw new Error('Game ID is missing!')
        } else {
            const gameID = await getGameByID(id);
            return res.status(201).json(gameID);
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const postGame = async (req, res) => {

    try {
        const newGame = req.body;
      
        const { name, description, platforms, released, image, rating, genres} = newGame;
       
        if ( !name || !description || !platforms || !released || !image || !rating || !genres ) {
            throw new Error('Missing game info!')
        } else {
        //    const genreNames = genres.map(genre => genre.name);
            // const genreNames = genres.name;
            const gameToAdd = await postNewGame({ name, description, platforms, released, image, rating, genres})
            return res.status(200).json(gameToAdd);
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { getAll, getByID, postGame };