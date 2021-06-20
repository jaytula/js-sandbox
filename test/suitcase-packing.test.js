/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} m
 * @param {number} n
 * @returns
 */
function fit_in(a, b, m, n) {
  return Math.max(a, b) <= Math.min(m, n) && a + b <= Math.max(m, n);
}

const Test = require("@codewars/test-compat");

describe("fit_in", function () {
  describe("sample tests", function () {
    test(true, 1, 2, 3, 2);
    test(false, 1, 2, 2, 1);
    test(false, 3, 2, 3, 2);
    test(false, 1, 2, 1, 2);
    test(false, 6, 5, 8, 7);
    test(false, 1, 3, 2, 4);
  });
});

function test(expected, a, b, m, n) {
  it(`a=${a} and b=${b} should ${
    expected ? "" : "NOT "
  }fit into m=${m} and n=${n}`, function () {
    Test.assertEquals(fit_in(a, b, m, n), expected);
  });
}
