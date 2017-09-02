import { assert } from 'chai'
import { counter } from '../src/counter'

describe('Counter reducer', function() {

  describe('INCREMENT action', function() {
    it('should return state incrementing by one', function() {
      const reducer = counter
      const action = {type: "INCREMENT"}
      let prevState = 0
      let state = 1

      assert.equal( reducer(prevState, action), state )

      prevState = 1
      state = 2

      assert.equal( reducer(prevState, action), state )
    });
  });

  describe('DECREMENT action', function() {
    it('should return state decrementing by one', function() {
      const reducer = counter
      const action = {type: "DECREMENT"}
      let prevState = 2
      let state = 1

      assert.equal( reducer(prevState, action), state )

      prevState = 1
      state = 0

      assert.equal( reducer(prevState, action), state )
    });
  });

  describe('UNKNOWN action', function() {
    it('should return same state', function() {
      const reducer = counter
      const action = {type: "Winnie-the-Pooh"}
      let prevState = 1
      let state = 1

      assert.equal( reducer(prevState, action), state )
    });
  });

  
  describe('undefined initial state', function() {
    it('should return default state', function() {
      const reducer = counter
      const action = {}
      let prevState = undefined;
      let state = 0

      assert.equal( reducer(prevState, action), state )
    });
  });

});