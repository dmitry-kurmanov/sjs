import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { h, render } from "preact";
import { Provider } from "preact-redux";

import appReducer from "./reducers";
import SurveyContainer from "./containers/SurveyContainer.jsx";

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
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : f => f
      )
    );
  }

  onComplete = {
    add: handler => {}
  };

  render(rootSelector = "body") {
    render(
      <Provider store={this.store}>
        <SurveyContainer />
      </Provider>,
      document.querySelector(rootSelector)
    );

    if (process.env.NODE_ENV === "development") {
      require("preact/debug");
      //module.hot.accept('./components/app', () => requestAnimationFrame(init) ); //HMR
    }
  }
}
