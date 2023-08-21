import axios from 'axios';
export const LOAD_GAMES = 'LOAD_GAMES';
export const LOAD_GENRES = 'LOAD_GENRES';
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const ORDER = 'ORDER';
export const RESET = 'RESET';
export const POST = 'POST';
export const GET_DETAIL = 'GETDETAIL';


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

export function searchByName(name) {
    const endpoint = `http://localhost:3001/videogames?name=${name}`;
 
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);

            return dispatch({
                type: SEARCH_BY_NAME,
                payload: data,
            });
        } catch (error) {
            return { error: error.message }
        };
    };
};

export function loadGenres(){
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
    const endpoint = `http://localhost:3001/videogames/${id}`

    return async (dispatch) => {
        const { data } = await axios.get(endpoint);

        return dispatch({
            type: GET_DETAIL,
            payload: data,
        })
    }
};

export function filterByGenre(genreID) {
    return {
        type: FILTER_BY_GENRE,
        payload: genreID,
    }
};

export function filterByOrigin(origin) {
    console.log('origin payload',origin);
    return {
        type: FILTER_BY_ORIGIN,
        payload: origin,
    }
};

export function order() {

};

export function reset() {

};

export function post() {

};

