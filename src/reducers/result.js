const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "USER_INPUT":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
