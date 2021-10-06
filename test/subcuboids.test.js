/**
 *
 * @param {BigInt} x
 * @param {BigInt} y
 * @param {BigInt} z
 * @returns
 */
function subcuboids(x, y, z) {
  return ((x * (x + 1n)) / 2n) * ((y * (y + 1n)) / 2n) * ((z * (z + 1n)) / 2n);
}

const { assert } = require("chai");

describe("Sample tests", function () {
  it("Tests", function () {
    let cases = [
      [[1n, 1n, 1n], 1n],
      [[2n, 2n, 2n], 27n],
      [[2n, 3n, 3n], 108n],
      [[4n, 5n, 6n], 3150n],
      [[3n, 7n, 11n], 11088n],
    ];
    for (let [input, expected] of cases)
      assert.strictEqual(subcuboids(...input), expected);
  });
});
