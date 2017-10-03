import { createStore } from "redux"
import { h, render, Component } from 'preact'

import appReducer from "./reducers"
import Counter from "./components/Counter.jsx"

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/* store.getState() */
/* store.dispatch({type: "INCREMENT"}) */
/* store.subscribe( () => {htmlElement.innerHTML = store.getState()} ) */

export const init = () => {
  const doInit = () => render(
    <Counter
      value={store.getState().counterReducer.toString()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    document.getElementById('root'),
    document.getElementById('root').lastChild
  )

  doInit()
  store.subscribe(doInit)
  
  if (module.hot) {
    require('preact/debug');
    //module.hot.accept('./components/app', () => requestAnimationFrame(init) ); //HMR
  }
};
