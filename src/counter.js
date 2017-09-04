import { createStore } from "redux";

const initialState = 0;

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counterReducer);

/* store.getState() */
/* store.dispatch({type: "INCREMENT"}) */
/* store.subscribe( () => {htmlElement.innerHTML = store.getState()} ) */
