/**
 *
 * @param {number} x1
 * @param {number} x2
 */
function quadratic(x1, x2) {
  return [1, -(x1 + x2), x1 * x2];
}

const Test = require("@codewars/test-compat");

describe("Solution", function () {
  it("should test for something", function () {
    Test.assertDeepEquals(quadratic(0, 1), [1, -1, 0]);
    Test.assertDeepEquals(quadratic(1, 1), [1, -2, 1]);
    Test.assertDeepEquals(quadratic(-4, -9), [1, 13, 36]);
    Test.assertDeepEquals(quadratic(-5, -4), [1, 9, 20]);
    Test.assertDeepEquals(quadratic(4, -9), [1, 5, -36]);
    Test.assertDeepEquals(quadratic(5, -4), [1, -1, -20]);
  });
});
