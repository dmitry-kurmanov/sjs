import { combineReducers } from "redux";
import counterReducer from "./counter";

const appReducer = combineReducers({
  counter: counterReducer,
  settings: (state = {}) => state,
  result: (state = {}) => state
});

export default appReducer;
