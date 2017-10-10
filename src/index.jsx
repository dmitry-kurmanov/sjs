import { createStore } from "redux"
import { h, render } from 'preact'
import { Provider } from 'preact-redux';

import appReducer from "./reducers"
import SurveyContainer from "./containers/SurveyContainer.jsx"

export class Model {
  constructor(json = null) {
    if (!json) {
      console.error("SJS error: invalid entry json: " + json);
      return;
    }

    const initialState = {
      counter: 8
    }

    const store = createStore(
      appReducer,
      initialState, 
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    this.render = (rootSelector = "body") => {
      render(
        <Provider store={store}>
          <SurveyContainer json={json}/>
        </Provider>,
        document.querySelector(rootSelector)
      )

      if (module.hot) {
        require('preact/debug');
        //module.hot.accept('./components/app', () => requestAnimationFrame(init) ); //HMR
      }
    }
  }
}
