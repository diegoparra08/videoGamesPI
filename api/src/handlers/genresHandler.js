const { getAllGenres } = require('../controllers/genresController');

const getGenres = async(req, res) => {
    try {
        const genres = await getAllGenres();
        return res.status(201).json(genres);
        
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = getGenres;