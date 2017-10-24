const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case "DO_COMPLETE":
        return {
            ...state,
            ...{isComplete: true}
        };
    default:
      return state;
  }
};
