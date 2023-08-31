import axios from 'axios';
export const LOAD_GAMES = 'LOAD_GAMES';
export const LOAD_GENRES = 'LOAD_GENRES';
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const ORDER_ALPHABETICALLY = 'ORDER_ALPHABETICALLY';
export const ORDER_BY_RATING = 'ORDER_BY_RATING';
export const RESET = 'RESET';
export const POST_NEW_GAME = 'POST_NEW_GAME';
export const GET_DETAIL = 'GET_DETAIL';
export const CLEAR_DETAIL = 'CLEAR_DETAIL';


export function loadGames() {
    const endpointGames = 'http://localhost:3001/videogames';

    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpointGames);

            const gamesWithOrigin = data.map(game => ({
                ...game,
                origin: typeof game.id === 'number' ? 'Api' : 'Data Base',
            }));
            return dispatch({
                type: LOAD_GAMES,
                payload: gamesWithOrigin,
            });

        } catch (error) {
            return { error: error.message }
        };
    };
};

export function searchByName(name, setSearchResultsFound) {
    const endpoint = `http://localhost:3001/videogames?name=${name}`;

    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            console.log('payload length', data.length, data);
            dispatch({
                type: SEARCH_BY_NAME,
                payload: data,
            });
            setSearchResultsFound(data.length > 0);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setSearchResultsFound(false);
            } 
            return { error: error.message };
        }
    };
};


export function loadGenres() {
    const endpoint = `http://localhost:3001/genres`;

    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);

            return dispatch({
                type: LOAD_GENRES,
                payload: data,
            });
        } catch (error) {
            return { error: error.message }
        };
    };
};

export function getDetail(id) {
    return async (dispatch) => {
        const endpoint = `http://localhost:3001/videogames/${id}`;

        try {
            const { data } = await axios.get(endpoint);

            dispatch({
                type: GET_DETAIL,
                payload: data,
            });
        } catch (error) {
            throw new Error(`Failed to get game detail: ${error.message}`);
        }
    };

};

export function clearDetail() {
    return {
        type: CLEAR_DETAIL,
    }
}

export function filterByGenre(genreID) {
    return {
        type: FILTER_BY_GENRE,
        payload: genreID,
    }
};

export function filterByOrigin(origin) {
    return {
        type: FILTER_BY_ORIGIN,
        payload: origin,
    }
};

export function orderAlhabetically(order) {
    return {
        type: ORDER_ALPHABETICALLY,
        payload: order,
    }
};

export function orderByRating(orderRating) {

    return {
        type: ORDER_BY_RATING,
        payload: orderRating,
    }
};

export function reset() {
    return {
        type: RESET,
    }
};

export function postNewGame(gameInfo) {
    const endpoint = 'http://localhost:3001/videogames';

    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, gameInfo)
            return dispatch({
                type: POST_NEW_GAME,
                payload: data,
            });
        } catch (error) {
            throw new Error(`Failed to create new game: ${error.message}`)

        };
    };
};

