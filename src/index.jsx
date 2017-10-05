import { createStore } from "redux"
import { h, render } from 'preact'
import { Provider } from 'preact-redux';

import appReducer from "./reducers"
import App from "./containers/App.jsx"

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const init = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
  
  if (module.hot) {
    require('preact/debug');
    //module.hot.accept('./components/app', () => requestAnimationFrame(init) ); //HMR
  }
};
