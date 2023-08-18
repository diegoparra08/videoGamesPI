

const initialState = {
    state: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      // manejo de diferentes tipos de acciones aquí
      // actualización del estado en función de la acción
      default:
        return state;
    }
  };
  
  export default rootReducer;