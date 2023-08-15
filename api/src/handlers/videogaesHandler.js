const { getAllGames, getGameByID, getGameByName } = require('../controllers/videogamesController');

const getAll = async (req, res) => {
    const { name } = req.query;

    try {
        if(name) {
            const gamesFound = await getGameByName(name);

            if (gamesFound.length === 0) {
                return res.status(404).json({ message: `Not matches were found for ${name}` })
            } else {
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

// const getByName = async (req, res) => {
//     const { name } = req.query;
//     try {
//         if (!name) {
//             throw new Error('No Name was provided!')
//         } else {
//             const gamesFound = await getGameByName(name);

//             if (gamesFound.length === 0) {
//                 return res.status(404).json({ message: `Not matches were found for ${name}` })
//             } else {
//                 return res.status(201).json(gamesFound);
//             }
//         }
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// };



module.exports = { getAll, getByID };