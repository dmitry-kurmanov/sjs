import deepFreeze from "deep-freeze";
import reducer from "../../src/reducers/survey.js";

describe("Survey reducer", function() {
  describe("DO_COMPLETE action", function() {
    test("should return state with isComplete === true", function() {
      const action = { type: "DO_COMPLETE" };

      let initState = deepFreeze({"isComplete": false});
      let expectedState = {"isComplete": true};
      let state = reducer(initState, action);
      expect(state).toEqual(expectedState);

      initState = deepFreeze({"isComplete": true});
      expectedState = {"isComplete": true};
      state = reducer(initState, action);
      expect(state).toEqual(expectedState);
    });
  });
});
