const { getAllGames, getGameByID } = require('../controllers/videogamesController');

const getAll = async (req, res) => {
    try {
        const games = await getAllGames();
        return res.status(201).json(games);

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

const getByID = async (req, res) => {
    const { id } = req.params;

    try {
        if(!id) {
            throw new Error ('Game ID is missing!')
        } else {
            const gameID = await getGameByID(id);
            return res.status(201).json(gameID);
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}



module.exports = { getAll, getByID };