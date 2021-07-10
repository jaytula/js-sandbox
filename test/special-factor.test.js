/**
 *
 * @param {number} n
 * @returns
 */
function sc(n) {
  const factors = [];

  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors.push(i);
      if (i !== n / i) factors.push(n / i);
    }
  }

  const binaryN = n.toString(2);

  factors.sort((a, b) => a - b);
  return factors.filter(num => binaryN.includes(num.toString(2)));
}

const Test = require("@codewars/test-compat");

describe("Coding 3min: Special Factor", () => {
  it("test", () => {
    Test.assertDeepEquals(sc(6), [1, 2, 3, 6]);
    Test.assertDeepEquals(sc(15), [1, 3, 15]);
    Test.assertDeepEquals(sc(100), [1, 2, 4, 25, 50, 100]);
    Test.assertDeepEquals(sc(1659), [1, 3, 7, 79, 1659]);
    Test.assertDeepEquals(sc(2547), [1, 3, 9, 2547]);
    Test.assertDeepEquals(sc(3800), [1, 2, 4, 5, 8, 475, 950, 1900, 3800]);
    Test.assertDeepEquals(
      sc(6112),
      [1, 2, 4, 8, 16, 32, 191, 382, 764, 1528, 3056, 6112]
    );
  });
});
