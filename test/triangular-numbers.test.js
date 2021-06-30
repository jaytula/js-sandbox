/**
 *
 * @param {number} t
 */
function isTriangular(t) {
  const factors = [];
  for (let i = 1; i <= Math.sqrt(2 * t); i++) {
    if (i * (i + 1) === 2 * t) return true;
  }
  return false;
}

const Test = require("@codewars/test-compat");

describe("isTriangular", function () {
  it("returns true when t is a triangular number", function () {
    Test.assertEquals(isTriangular(1), true, "Failed when t = 1");
    Test.assertEquals(isTriangular(3), true, "Failed when t = 3");
    Test.assertEquals(isTriangular(6), true, "Failed when t = 6");
    Test.assertEquals(isTriangular(10), true, "Failed when t = 10");
    Test.assertEquals(isTriangular(15), true, "Failed when t = 15");
    Test.assertEquals(isTriangular(21), true, "Failed when t = 21");
    Test.assertEquals(isTriangular(28), true, "Failed when t = 28");
  });

  it("returns false when t is not a triangular number", function () {
    Test.assertEquals(isTriangular(2), false, "Failed when t = 2");
    Test.assertEquals(isTriangular(7), false, "Failed when t = 7");
    Test.assertEquals(isTriangular(14), false, "Failed when t = 14");
    Test.assertEquals(isTriangular(27), false, "Failed when t = 27");
  });
});
