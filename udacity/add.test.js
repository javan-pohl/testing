const { expect } = require("@jest/globals");
const sum = require("./add");

test("add 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("add(0.234, 0.167) to equal .401", () => {
  expect(sum(0.234, 0.167)).toBe(0.401);
});
test("expect string params to throw error", () => {
  expect(() => {
    sum(2, "three")
  }).toThrow("Params must be a number")
});
