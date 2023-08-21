
import { LOAD_GAMES, LOAD_GENRES, SEARCH_BY_NAME, GET_DETAIL, 
  FILTER_BY_GENRE, FILTER_BY_ORIGIN, ORDER_ALPHABETICALLY, ORDER_BY_RATING} from './actions'


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
        ...state,
        allGames: state.copyAllGames.filter(game =>
          game.genres.some(genre => genre.id === action.payload)
        )
      };

      case FILTER_BY_ORIGIN:
        console.log('reducer',action.payload);
        console.log('estado', state.copyAllGames);
    
        return {
          ...state,
          allGames: state.copyAllGames.filter(game => game.origin === action.payload)
        
        };

        case ORDER_ALPHABETICALLY:
            let ordered;
            if (action.payload === 'A-Z') {
                ordered = state.copyAllGames.sort((a, b) => a.name > b.mame ? 1 : -1)
            } else {
                ordered = state.copyAllGames.sort((a, b) => b.name > a.name ? 1 : -1)
            }
            return {
                ...state,
                allGames: [...ordered]
            };

            case ORDER_BY_RATING:
              let orderedRating;
              if (action.payload === 'Ascending') {
                  orderedRating = state.copyAllGames.sort((a, b) => a.rating > b.rating ? 1 : -1)
              } else {
                  orderedRating = state.copyAllGames.sort((a, b) => b.rating > a.rating ? 1 : -1)
              }
              return {
                  ...state,
                  allGames: [...orderedRating]
              };


    default:
      return state;
  }
};

export default rootReducer;