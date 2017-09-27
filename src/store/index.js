import { createStore } from "redux";
import appReducer from "../reducers";

const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

/* store.getState() */
/* store.dispatch({type: "INCREMENT"}) */
/* store.subscribe( () => {htmlElement.innerHTML = store.getState()} ) */
