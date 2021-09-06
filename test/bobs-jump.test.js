/**
 *
 * @param {number} n
 * @param {number} k
 */
function countWays(n, k) {
  if (k > n) return countWays(n, n);
  if (k === 1 || k === 0) return 1;

  return Array.from({ length: k }, (_, idx) =>
    countWays(n - 1 - idx, k)
  ).reduce((acc, curr) => acc + curr, 0);
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

it("Fixed tests", function () {
  assert.strictEqual(countWays(1, 1), 1);
  assert.strictEqual(countWays(2, 1), 1);
  assert.strictEqual(countWays(3, 1), 1);
  assert.strictEqual(countWays(4, 1), 1);
  assert.strictEqual(countWays(1, 2), 1);
  assert.strictEqual(countWays(2, 2), 2);
  assert.strictEqual(countWays(3, 2), 3);
  assert.strictEqual(countWays(4, 2), 5);
  assert.strictEqual(countWays(1, 3), 1);
  assert.strictEqual(countWays(2, 3), 2);
  assert.strictEqual(countWays(3, 3), 4);
  assert.strictEqual(countWays(4, 3), 7);
  assert.strictEqual(countWays(5, 3), 13);

  assert.strictEqual(countWays(1, 3), 1);
  assert.strictEqual(countWays(3, 3), 4);
  assert.strictEqual(countWays(2, 3), 2);
  assert.strictEqual(countWays(5, 3), 13);
  assert.strictEqual(countWays(4, 3), 7);
  assert.strictEqual(countWays(10, 6), 492);
  assert.strictEqual(countWays(14, 7), 7936);
});
