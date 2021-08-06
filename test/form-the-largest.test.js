/**
 *
 * @param {number} n
 */
function maxNumber(n) {
  return +n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

const Test = require("@codewars/test-compat");

it("Form The Largest", () => {
  Test.assertEquals(maxNumber(213), 321);
  Test.assertEquals(maxNumber(7389), 9873);
  Test.assertEquals(maxNumber(63792), 97632);
  Test.assertEquals(maxNumber(566797), 977665);
  Test.assertEquals(maxNumber(1000000), 1000000);
});
