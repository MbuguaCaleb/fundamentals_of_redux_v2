//Remeber that a reducer is a function

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      // need this for default case
      return state;
  }
};

export default counterReducer;
