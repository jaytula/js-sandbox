/**
 *
 * @param {string} code
 */
function hexHash(code) {
  return code
    .split("")
    .map((ch) => ch.charCodeAt(0).toString(16))
    .join("")
    .replace(/[^0-9]/g, "")
    .split("")
    .reduce((acc, curr) => acc + +curr, 0);
}

const Test = require("@codewars/test-compat");

describe("Basic tests", function () {
  it("Yo", function () {
    Test.assertEquals(hexHash("Yo"), 20);
  });
  it("Hello, World!", function () {
    Test.assertEquals(hexHash("Hello, World!"), 91);
  });
  it("Forty4Three", function () {
    Test.assertEquals(hexHash("Forty4Three"), 113);
  });
});
