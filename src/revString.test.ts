const reverseString = require("./revString");

test("Reverse the string => hello", () => {
  expect(reverseString("hello")).toBe("olleh");
})

test("Reverse string => My Body is ready", () => {
  expect(reverseString("My Body is ready")).toBe("ydaer si ydoB yM");
})