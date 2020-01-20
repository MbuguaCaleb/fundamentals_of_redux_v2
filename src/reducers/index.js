import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

//Combine Reducer is a function which takes in an object
const allReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
});

export default allReducer;
