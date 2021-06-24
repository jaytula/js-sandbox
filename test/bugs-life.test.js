/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns
 */
function shortestDistance(a, b, c) {
  const d1 = Math.sqrt((b + c) ** 2 + a ** 2);
  const d2 = Math.sqrt((a + c) ** 2 + b ** 2);
  const d3 = Math.sqrt((a + b) ** 2 + c ** 2);

  return Math.min(d1, d2, d3);
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertApproxEquals(shortestDistance(1, 2, 3), 4.242640687119285);
    Test.assertApproxEquals(shortestDistance(1, 1, 1), 2.23606797749979);
    Test.assertApproxEquals(
      shortestDistance(134, 191.5, 45.5),
      262.47380821712477
    );
  });
});
