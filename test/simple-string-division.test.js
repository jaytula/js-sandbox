/**
 *
 * @param {string} str
 * @param {number} k
 */
function solve(str, k) {
  const size = str.length - k;

  return Math.max.apply(
    null,
    Array.from({ length: k + 1 }, (_, idx) => +str.slice(idx, idx + size))
  );
}

const Test = require("@codewars/test-compat");

it("Basic tests", function () {
  Test.assertEquals(solve("123", 1), 23);
  Test.assertEquals(solve("1234", 1), 234);
  Test.assertEquals(solve("1234", 2), 34);
  Test.assertEquals(solve("1234", 3), 4);
});
