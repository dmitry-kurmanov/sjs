import { createStore } from "redux";
import appReducer from "./reducers";

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/* store.getState() */
/* store.dispatch({type: "INCREMENT"}) */
/* store.subscribe( () => {htmlElement.innerHTML = store.getState()} ) */

export const init = () => {
  var valueEl = document.getElementById("value");
  function render() {
    valueEl.innerHTML = store.getState().counterReducer.toString();
  }
  window.store = store;
  render();
  store.subscribe(render);
  document.getElementById("increment").addEventListener("click", function() {
    store.dispatch({ type: "INCREMENT" });
  });
  document.getElementById("decrement").addEventListener("click", function() {
    store.dispatch({ type: "DECREMENT" });
  });
  document
    .getElementById("incrementIfOdd")
    .addEventListener("click", function() {
      if (store.getState().counterReducer % 2 !== 0) {
        store.dispatch({ type: "INCREMENT" });
      }
    });
  document
    .getElementById("incrementAsync")
    .addEventListener("click", function() {
      setTimeout(function() {
        store.dispatch({ type: "INCREMENT" });
      }, 1000);
    });
};
