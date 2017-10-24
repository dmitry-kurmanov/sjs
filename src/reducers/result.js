const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_RESULT":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
