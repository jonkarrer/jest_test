const capString = require("./capString");

test("capitalize first letter of => name", () => {
  expect(capString("name")).toBe("Name");
})
test("capitalize first letter of => hello", () => {
  expect(capString("hello")).toBe("Hello");
})