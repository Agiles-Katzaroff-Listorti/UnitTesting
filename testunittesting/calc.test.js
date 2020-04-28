const Calc = require("./index");
test("test 1+2=3", () => {
  const c = new Calc();
  expect(c.calculator("1,2")).toBe(3);
});

test("test 4+2=6", () => {
  const c = new Calc();
  expect(c.calculator("4,2")).toBe(6);
});

test('test ""=0', () => {
  const c = new Calc();
  expect(c.calculator("")).toBe(0);
});
