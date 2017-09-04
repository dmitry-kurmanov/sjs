import { assert } from "chai";
import deepFreeze from "deep-freeze";
import { arrayRemoveItemByIndex, arrayAddItem } from "../src/utils/immutable";

describe("Utils", () => {
  describe("Immutable", () => {
    describe("arrayRemoveItemByIndex", () => {
      it("should remove item from the array and return new array without mutations", () => {
        let array = [1, 2, 3, 4, 5];
        let newArray;

        deepFreeze(array);
        newArray = arrayRemoveItemByIndex(array, 3);
        assert.deepEqual(newArray, [1, 2, 4, 5]);
      });
    });

    describe("arrayAddItem", () => {
      it("should add item to the array and return new array without mutations", () => {
        let array = [1, 2, 3, 4];
        let newArray;

        deepFreeze(array);
        newArray = arrayAddItem(array, 5);
        assert.deepEqual(newArray, [1, 2, 3, 4, 5]);
      });
    });
  });
});
