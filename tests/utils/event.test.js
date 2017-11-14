import Event from "../../src/utils/event";

describe("Event util", () => {
  test("Event isEmpty", () => {
    const event = new Event();
    const callback = () => {};

    expect(event.isEmpty).toEqual(true);
    event.add(callback);
    expect(event.isEmpty).toEqual(false);
    event.remove(callback);
    expect(event.isEmpty).toEqual(true);
  });

  test("Event no parameters", () => {
    const event = new Event();
    let counter = 0;
    const callback = () => {
      counter++;
    };

    event.add(callback);
    event.fire(null, null);
    expect(counter).toEqual(1);
    event.remove(callback);
    event.fire(null, null);
    expect(counter).toEqual(1);
  });

  test("Event with parameters", () => {
    const event = new Event();
    let counter = 0;
    const options = { allow: false };

    event.add((s, params) => {
      counter += s;
      params.allow = true;
    });

    event.fire(5, options);
    expect(options.allow).toEqual(true);
    expect(counter).toEqual(5);
  });
});
