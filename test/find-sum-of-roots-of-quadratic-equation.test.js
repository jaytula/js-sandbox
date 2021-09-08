/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns
 */
function roots(a, b, c) {
  const root1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  const root2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);

  const sumOfRoots = root1 + root2;
  return Number.isNaN(sumOfRoots) ? null : +sumOfRoots.toFixed(2);
}

const Test = require("@codewars/test-compat");

it("Basic tests", () => {
  Test.assertEquals(roots(1, -35, -23), 35);
  Test.assertEquals(roots(6, 0, -24), 0);
  Test.assertEquals(roots(-5, 21, 0), 4.2);
  Test.assertEquals(roots(6, 4, 8), null);
  Test.assertEquals(roots(1, 5, -24), -5);
  Test.assertEquals(roots(3, 11, 6), -3.67);
  Test.assertEquals(roots(2, 2, 9), null);
  Test.assertEquals(roots(1, -5 / 3.0, -26), 1.67);
  Test.assertEquals(roots(1, 6, 10), null);
  Test.assertEquals(roots(7, -2, -5), 0.29);
  Test.assertEquals(roots(1, 8, 20), null);
  Test.assertEquals(roots(2, 3, -2), -1.5);
  Test.assertEquals(roots(1, 4, 12), null);
  Test.assertEquals(roots(3, -2, -5), 0.67);
  Test.assertEquals(roots(3, 4, 9), null);
  Test.assertEquals(roots(5, 4, 0), -0.8);
  Test.assertEquals(roots(4, -5, 0), 1.25);
  Test.assertEquals(roots(1, 4, 9), null);
  Test.assertEquals(roots(1, 0, -49), 0);
  Test.assertEquals(roots(2, 8, 8), -4);
  Test.assertEquals(roots(1, 0, -0.16), 0);
  Test.assertEquals(roots(1, 6, 12), null);
  Test.assertEquals(roots(1, 0, -9), 0);
  Test.assertEquals(roots(-3, 0, 12), 0);
  Test.assertEquals(roots(1, 3, 9), null);
  Test.assertEquals(roots(3, 7, 0), -2.33);
  Test.assertEquals(roots(5, 3, 6), null);
  Test.assertEquals(roots(1, 4, 4), -4);
  Test.assertEquals(roots(-1, 0, 5.29), 0);
  Test.assertEquals(roots(1, 12, 36), -12);
  Test.assertEquals(roots(1, 0, -0.09), 0);
  Test.assertEquals(roots(2, 5, 11), null);
  Test.assertEquals(roots(3, 0, -15), 0);
  Test.assertEquals(roots(1, -3, 0), 3);
  Test.assertEquals(roots(1, 8, 16), -8);
  Test.assertEquals(roots(2, 6, 9), null);
  Test.assertEquals(roots(-1, 36, 0), 36);
  Test.assertEquals(roots(5, -8, 0), 1.6);
  Test.assertEquals(roots(1, 5, 12), null);
  Test.assertEquals(roots(-14, 0, 0), 0);
  Test.assertEquals(roots(1, 7, 20), null);
  Test.assertEquals(roots(1, -6, 0), 6);
  Test.assertEquals(roots(1, -11, 30), 11);
  Test.assertEquals(roots(1, 3, 12), null);
  Test.assertEquals(roots(1, 6, 9), -6);
});
