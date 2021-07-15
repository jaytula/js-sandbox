/**
 *
 * @param {number} s
 * @param {number} g
 */
function solve(s, g) {
  for (let i = 1; i <= s / 2; i++) {
    const [num1, num2] = [i, s - i];
    if ([num1, num2].every((num) => num % g === 0)) return [num1, num2];
  }
  return -1;
}

const chai = require("chai");
const assert = chai.assert;

describe("GCD sum", function () {
  it("basic tests", function () {
    assert.deepEqual(solve(6, 3), [3, 3]);
    assert.deepEqual(solve(8, 2), [2, 6]);
    assert.deepEqual(solve(10, 3), -1);
    assert.deepEqual(solve(12, 4), [4, 8]);
    assert.deepEqual(solve(12, 5), -1);
  });
});
