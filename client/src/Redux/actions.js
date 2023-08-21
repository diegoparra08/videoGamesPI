import axios from 'axios';
export const LOAD_GAMES = 'LOAD_GAMES'
export const FILTER = 'FILTER';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const ORDER = 'ORDER';
export const RESET = 'RESET';
export const POST = 'POST';
export const GET_DETAIL = 'GETDETAIL';


export function loadGames() {
    const endpoint = 'http://localhost:3001/videogames';

    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);

            const gamesWithOrigin = data.map(game => ({
                ...game, 
                origin: typeof game.id === 'number' ? 'api' : 'db',
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

export function filter(genre, origin) {
    return {
        type: FILTER,
        payload: {
            genre: genre,
            origin: origin, //se hace la logica en el reducer para asignarle el origen
        }
    }
};

export function order() {

};

export function reset() {

};

export function post() {

};

