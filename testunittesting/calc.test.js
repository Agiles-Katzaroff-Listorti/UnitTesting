const Calc = require("./index");

const c = new Calc();

test("test 1+2=3", () => {
  expect(c.calculator("1,2")).toBe(3);
});

test("test 4+2=6", () => {
  expect(c.calculator("4,2")).toBe(6);
});

test('test ""=0', () => {
  expect(c.calculator("")).toBe(0);
});
