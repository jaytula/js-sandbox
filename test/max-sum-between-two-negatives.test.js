/**
 *
 * @param {number[]} a
 * @returns
 */
function maxSumBetweenTwoNegatives(a) {
  let result = -1;
  let state = "OUTSIDE";
  let currentItems = [];
  for (let num of a) {
    if (num < 0) {
      if (state === "INSIDE") {
        const sum = currentItems.reduce((acc, curr) => acc + curr, 0);
        if (sum > result) result = sum;
        currentItems = []
      
        continue;
      }

      state = "INSIDE";
      currentItems = [];
    }
    if(num >= 0 && state === 'INSIDE') currentItems.push(num);
  }

  return result;
}

const { assert, config } = require("chai");
config.truncateThreshold = 0;

it("example tests", () => {
  assert.strictEqual(maxSumBetweenTwoNegatives([-1, 6, -2, 3, 5, -7]), 8);
  assert.strictEqual(maxSumBetweenTwoNegatives([5, -1, -2]), 0);
  assert.strictEqual(maxSumBetweenTwoNegatives([1, -2]), -1);
});
