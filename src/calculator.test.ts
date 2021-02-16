const calculator = require('./calculator');

test("add => 2 + 2", () => {
  expect(calculator.add(2,2)).toBe(4);
})
test('subtract => 10 - 3', () => {
  expect(calculator.sub(10,3)).toBe(7);
})
test("divide => 10 / 5", () => {
  expect(calculator.divide(10, 5)).toBe(2);
})
test("multiply => 5 * 5", () => {
  expect(calculator.multiply(5,5)).toBe(25);
})