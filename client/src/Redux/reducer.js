
import {
  LOAD_GAMES, LOAD_GENRES, SEARCH_BY_NAME, GET_DETAIL, POST_NEW_GAME, CLEAR_DETAIL,
  FILTER_BY_GENRE, FILTER_BY_ORIGIN, ORDER_ALPHABETICALLY, ORDER_BY_RATING, RESET
} from './actions'

const initialState = {
  allGames: [],
  copyAllGames: [],
  backUpAllGames: [],
  filteredGames: [],
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
        backUpAllGames: action.payload,
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
      const filteredByGenre = state.copyAllGames.filter(game =>
        game.genres.some(genre => genre.id === action.payload)
      )
      return {
        ...state,
        filters: [action.payload],
        allGames: filteredByGenre,
        filteredGames: filteredByGenre,
      };

    case FILTER_BY_ORIGIN:
      const filteredByOrigin = state.copyAllGames.filter(game => game.origin === action.payload)
      return {
        ...state,
        filters: [action.payload], 
        allGames: filteredByOrigin,
        filteredGames: filteredByOrigin,
      };

    case ORDER_ALPHABETICALLY:
      if (state.filteredGames.length > 0) {
        const sortedFilteredGamesAlpha = state.filteredGames.slice().sort((a, b) => {
          if (action.payload === 'A-Z') {
            return a.name.localeCompare(b.name);
          } else {
            return b.name.localeCompare(a.name);
          }
        });

        return {
          ...state,
          allGames: sortedFilteredGamesAlpha,
          activeOrder: 'alphabetical',
        }
      } else {
        const orderTypeAlpha = action.payload;
        const sortedGamesAlpha = state.copyAllGames.slice().sort((a, b) => {
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
      }

    case ORDER_BY_RATING:
      if (state.filteredGames.length > 0) {
        const orderTypeRating = action.payload;
        const sortedFilteredGamesRating = state.filteredGames.slice().sort((a, b) => {
          if (orderTypeRating === 'Ascending') {
            return a.rating - b.rating;
          } else {
            return b.rating - a.rating;
          }
        });

        return {
          ...state,
          allGames: sortedFilteredGamesRating,
          activeOrder: 'rating',
        }
      } else {
        const orderTypeRating = action.payload;
        const sortedGamesRating = state.copyAllGames.slice().sort((a, b) => {
          if (orderTypeRating === 'Ascending') {
            return a.rating - b.rating;
          } else {
            return b.rating - a.rating;
          }
        });

        return {
          ...state,
          allGames: sortedGamesRating,
          copyAllGames: sortedGamesRating,
          activeOrder: 'rating',
        };
      }


    case RESET:
      return {
        ...state,
        allGames: state.backUpAllGames,
        copyAllGames: state.backUpAllGames,
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