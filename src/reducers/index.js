import { combineReducers } from "redux";
import undoable, { excludeAction } from "redux-undo";

import resultReducer from "./result";
import surveyReducer from "./survey";

const settingsReducer = (state = {}) => state;

const appReducer = combineReducers({
  settings: undoable(settingsReducer),
  result: undoable(resultReducer),
  survey: undoable(surveyReducer, { filter: excludeAction("DO_COMPLETE") })
});

export default appReducer;
