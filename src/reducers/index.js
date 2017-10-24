import { combineReducers } from "redux";

import resultReducer from "./result";
import surveyReducer from "./survey";

const settingsReducer = (state = {}) => state;

const appReducer = combineReducers({
  settings: settingsReducer,
  result: resultReducer,
  survey: surveyReducer
});

export default appReducer;
