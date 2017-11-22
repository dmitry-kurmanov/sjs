import Event from "../utils/event.js";

const events = {
  onComplete: new Event()
};

export const APIMiddleware = store => next => action => {
  const event = action.event;
  event && events[event].fire(store.getState().result);
  return next(action);
};

export const applyAPI = parent => {
  for (let event in events) {
    parent[event] = events[event];
  }
};
