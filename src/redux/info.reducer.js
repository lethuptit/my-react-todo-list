const infoReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_APP_STATUS':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default infoReducer;