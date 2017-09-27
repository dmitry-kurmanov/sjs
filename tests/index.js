import { assert } from "chai";
import deepFreeze from "deep-freeze";
import { counterReducer } from "../src/counter";

describe("Counter reducer", function() {
  describe("INCREMENT action", function() {
    it("should return state incrementing by one", function() {
      const reducer = counterReducer;
      const action = { type: "INCREMENT" };
      let stateBefore = 0;
      let state = 1;

      assert.equal(reducer(stateBefore, action), state);

      stateBefore = 1;
      state = 2;

      assert.equal(reducer(stateBefore, action), state);
    });
  });

  describe("DECREMENT action", function() {
    it("should return state decrementing by one", function() {
      const reducer = counterReducer;
      const action = { type: "DECREMENT" };
      let stateBefore = 2;
      let state = 1;

      assert.equal(reducer(stateBefore, action), state);

      stateBefore = 1;
      state = 0;

      assert.equal(reducer(stateBefore, action), state);
    });
  });

  describe("UNKNOWN action", function() {
    it("should return same state", function() {
      const reducer = counterReducer;
      const action = { type: "Winnie-the-Pooh" };
      let stateBefore = 1;
      let state = 1;

      assert.equal(reducer(stateBefore, action), state);
    });
  });

  describe("undefined initial state", function() {
    it("should return default state", function() {
      const reducer = counterReducer;
      const action = {};
      let stateBefore = undefined;
      let state = 0;

      assert.equal(reducer(stateBefore, action), state);
    });
  });
});
