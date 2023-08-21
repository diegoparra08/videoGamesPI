
import { LOAD_GAMES, SEARCH_BY_NAME, GET_DETAIL } from './actions'


const initialState = {
    allGames: [],
    copyAllGames: [],
    gameDetail : {},
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

      case SEARCH_BY_NAME:
        return {
          ...state,
         allGames: action.payload,
         
        };
      
        case GET_DETAIL: 
        return {
          ...state,
          gameDetail: action.payload,
        }
      default:
        return state;
    }
  };
  
  export default rootReducer;