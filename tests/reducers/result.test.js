import deepFreeze from "deep-freeze";
import reducer from "../../src/reducers/result.js";

describe("Result reducer", function() {
  describe("CHANGE_RESULT action", function() {
    test("should return state with name:value", function() {
      let action = { type: "CHANGE_RESULT", payload: { "q1": "val1" } };

      let initState = deepFreeze({});
      let expectedState = {"q1": "val1"};
      let state = reducer(initState, action);
      expect(state).toEqual(expectedState);

      initState = deepFreeze({"q1": "val1"});
      expectedState = {"q1": "val1", "q2": "val2"};
      action = { type: "CHANGE_RESULT", payload: { "q2": "val2" } };
      state = reducer(initState, action);
      expect(state).toEqual(expectedState);
    });
  });
});