import { createStore } from "redux";
import { h, render, Component } from 'preact';

import appReducer from "./reducers";
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
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    document.getElementById('root')
  )

  doInit()
  store.subscribe(doInit)

  // var valueEl = document.getElementById("value");
  // function render() {
  //   valueEl.innerHTML = store.getState().counterReducer.toString();
  // }
  // window.store = store;
  // render();
  // store.subscribe(render);
  // document.getElementById("increment").addEventListener("click", function() {
  //   store.dispatch({ type: "INCREMENT" });
  // });
  // document.getElementById("decrement").addEventListener("click", function() {
  //   store.dispatch({ type: "DECREMENT" });
  // });
  // document
  //   .getElementById("incrementIfOdd")
  //   .addEventListener("click", function() {
  //     if (store.getState().counterReducer % 2 !== 0) {
  //       store.dispatch({ type: "INCREMENT" });
  //     }
  //   });
  // document
  //   .getElementById("incrementAsync")
  //   .addEventListener("click", function() {
  //     setTimeout(function() {
  //       store.dispatch({ type: "INCREMENT" });
  //     }, 1000);
  //   });
};
