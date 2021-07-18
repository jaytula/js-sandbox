/**
 * @param {number[]} arr
 */
function differences(arr) {
  while (arr.length > 1) {
    arr = Array.from({ length: arr.length - 1 }, (_, idx) =>
      Math.abs(arr[idx + 1] - arr[idx])
    );
  }
  return arr[0];
}

const { assert } = require("chai");

it("Consecutive Differences", () => {
  assert.strictEqual(differences([1, 2, 3]), 0);
  assert.strictEqual(differences([1, 5, 2, 7, 8, 9, 0]), 1);
  assert.strictEqual(differences([2, 3, 1]), 1);
  assert.strictEqual(differences([-1, 2, 3]), 2);
});
