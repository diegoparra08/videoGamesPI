const { getGenresFromApi, getGenresFromDB } = require('../controllers/genresController');

const getGenres = async (req, res) => {
    try {
        const DB = await getGenresFromDB();
        if (DB.length > 0) {
           // console.log('Entro a la db');
            return res.status(201).json(DB);
        } else {
            const genres = await getGenresFromApi();
            return res.status(201).json(genres);
        }

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = getGenres;