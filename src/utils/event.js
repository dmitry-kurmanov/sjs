export default class Event {
  constructor() {
    this.callbacks = [];
  }

  get isEmpty() {
    return this.callbacks.length == 0;
  }

  fire(sender, options) {
    for (let callback of this.callbacks) {
      let callResult = callback(sender, options);
    }
  }

  add(callback) {
    this.callbacks.push(callback);
  }

  remove(callback) {
    this.callbacks = this.callbacks.filter(item => item !== callback);
  }
}
