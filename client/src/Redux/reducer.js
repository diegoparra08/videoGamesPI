
import { LOAD_GAMES, LOAD_GENRES, SEARCH_BY_NAME, GET_DETAIL, FILTER_BY_GENRE } from './actions'


const initialState = {
  allGames: [],
  copyAllGames: [],
  gameDetail: {},
  genres: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOAD_GAMES:
      return {
        ...state,
        allGames: action.payload,
        copyAllGames: action.payload,
      };

    case LOAD_GENRES:
      return {
        ...state,
        genres: action.payload,
      }

    case SEARCH_BY_NAME:
      return {
        ...state,
        allGames: action.payload,

      };

    case GET_DETAIL:
      return {
        ...state,
        gameDetail: action.payload,
      };

    case FILTER_BY_GENRE:
      return {
      //   ...state,
      //   allGames: state.copyAllGames.filter(game =>
      //     game.genres.includes(action.payload) 
      //   )
      ...state,
    allGames: state.copyAllGames.filter(game =>
      game.genres.some(genre => genre.id === action.payload)
    )
      }
    
    default:
      return state;
  }
};

export default rootReducer;