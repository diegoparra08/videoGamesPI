const { getAllGames } = require('../controllers/videogamesController');

const getAll = async (req, res) => {
    try {
        const games = await getAllGames();
        return res.status(201).json(games);

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

// const getByID = async (req, res) => {

// }



module.exports = { getAll };