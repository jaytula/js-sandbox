/**
 *
 * @param {string} s
 * @returns
 */
function validSpacing(s) {
  return s.replace(/\s+/g, " ").trim() === s;
}

test("Testing 'Hello world'", function () {
  expect(validSpacing("Hello world")).toBe(true);
});
test("Testing ' Hello world'", function () {
  expect(validSpacing(" Hello world")).toBe(false);
});
test("Testing 'Hello  world '", function () {
  expect(validSpacing("Hello  world ")).toBe(false);
});
test("Testing 'Hello'", function () {
  expect(validSpacing("Hello")).toBe(true);
});
test("Testing 'Helloworld'", function () {
  expect(validSpacing("Helloworld")).toBe(true);
});
