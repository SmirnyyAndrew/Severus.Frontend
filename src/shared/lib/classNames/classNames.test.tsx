import { classNames } from "./classNames";

describe("classNames", () => {
  test("With only 1 param", () => {
    const className = classNames("param");
    const expected = "param";
    expect(className).toBe(expected);
  });

  test("With additinal class", () => {
    const className = classNames("param", {}, ["p1", "p2"]);
    const expected = "param p1 p2";
    expect(className).toBe(expected);
  });

  test("with mods", () => {
    const className = classNames(
      "param",
      { hovered: true, scrollable: false },
      []
    );
    const expected = "param hovered";
    expect(className).toBe(expected);
  });

  test("With unidefind and null", () => {
    const className = classNames("param", {}, ["p1", null, undefined, "p2"]);
    const expected = "param p1 p2";
    expect(className).toBe(expected);
  });
});
