import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { h, render } from "preact";
import { Provider } from "preact-redux";
import { ActionCreators } from "redux-undo";

import appReducer from "./reducers";
import SurveyContainer from "./containers/SurveyContainer.jsx";
import { APIMiddleware, applyAPI } from "./api/index";

export class Model {
  constructor(json = null) {
    if (!json) {
      console.error("SJS error: invalid entry json: " + json);
      return;
    }

    const initialState = {
      settings: json,
      result: {},
      survey: {
        isComplete: false
      }
    };

    this.store = createStore(
      appReducer,
      initialState,
      compose(
        applyMiddleware(thunk, APIMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : f => f
      )
    );

    applyAPI(this);
  }

  undo = () => {
    this.store.dispatch(ActionCreators.undo());
  };

  redo = () => {
    this.store.dispatch(ActionCreators.redo());
  };

  render(rootSelector = "body") {
    render(
      <Provider store={this.store}>
        <SurveyContainer undo={this.undo} redo={this.redo} />
      </Provider>,
      document.querySelector(rootSelector)
    );

    if (process.env.NODE_ENV === "development") {
      require("preact/debug");
      //module.hot.accept('./components/app', () => requestAnimationFrame(init) ); //HMR
    }
  }
}
