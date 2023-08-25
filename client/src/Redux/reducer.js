import {
  LOAD_GAMES, LOAD_GENRES, SEARCH_BY_NAME, GET_DETAIL, POST_NEW_GAME, CLEAR_DETAIL,
  FILTER_BY_GENRE, FILTER_BY_ORIGIN, ORDER_ALPHABETICALLY, ORDER_BY_RATING, RESET
} from './actions'

const initialState = {
  allGames: [],
  copyAllGames: [],
  gameDetail: {},
  genres: [],
  filters: [],
  activeOrder: null,
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
      case CLEAR_DETAIL: 
      return {
        ...state, 
        gameDetail: {},
      }

    case FILTER_BY_GENRE:
      return {
        ...state,
        filters: [action.payload],
        allGames: state.copyAllGames.filter(game =>
          game.genres.some(genre => genre.id === action.payload)
        ),
      };

    case FILTER_BY_ORIGIN:
      return {
        ...state,
        filters: [action.payload], // Reiniciar los filtros al aplicar un nuevo filtro
        allGames: state.copyAllGames.filter(game => game.origin === action.payload),
      };

    case ORDER_ALPHABETICALLY:
      const orderTypeAlpha = action.payload;
      const sortedGamesAlpha = state.allGames.slice().sort((a, b) => {
        if (orderTypeAlpha === 'A-Z') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });

      return {
        ...state,
        allGames: sortedGamesAlpha,
        activeOrder: 'alphabetical',
      };

    case ORDER_BY_RATING:
      const orderTypeRating = action.payload;
      const sortedGamesRating = state.allGames.slice().sort((a, b) => {
        if (orderTypeRating === 'Ascending') {
          return a.rating - b.rating;
        } else {
          return b.rating - a.rating;
        }
      });

      return {
        ...state,
        allGames: sortedGamesRating,
        activeOrder: 'rating',
      };

      case RESET:
        return {
          ...state,
          allGames: state.copyAllGames, 
        };

        case POST_NEW_GAME:
          return {
            ...state,
            copyAllGames: action.payload,
            allGames: action.payload
            
          }

    default:
      return state;
  }
};

export default rootReducer;
