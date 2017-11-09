import deepFreeze from "deep-freeze";
import {
  arrayRemoveItemByIndex,
  arrayAddItem
} from "../../src/utils/immutable";

describe("Immutable util", () => {
  describe("arrayRemoveItemByIndex", () => {
    test("should remove item from the array and return new array without mutations", () => {
      let array = [1, 2, 3, 4, 5];
      let newArray;

      deepFreeze(array);
      newArray = arrayRemoveItemByIndex(array, 3);
      expect(newArray).toEqual([1, 2, 4, 5]);
    });
  });

  describe("arrayAddItem", () => {
    test("should add item to the array and return new array without mutations", () => {
      let array = [1, 2, 3, 4];
      let newArray;

      deepFreeze(array);
      newArray = arrayAddItem(array, 5);
      expect(newArray).toEqual([1, 2, 3, 4, 5]);
    });
  });
});
