
import { LOADGAMES, FILTER, SEARCHBYNAME, ORDER, RESET, POST, GETDETAIL } from './actions'


const initialState = {
    allGames: [],
    genres: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {

      case LOADGAMES: 
      return {
        ...state,
        allGames: action.payload,
      }
      // manejo de diferentes tipos de acciones aquí
      // actualización del estado en función de la acción
      default:
        return state;
    }
  };
  
  export default rootReducer;