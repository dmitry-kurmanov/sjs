import { combineReducers } from "redux";
import counterReducer from "./counter";
import resultReducer from "./result";

const appReducer = combineReducers({
  counter: counterReducer,
  settings: (state = {}) => state,
  result: resultReducer
});

export default appReducer;
