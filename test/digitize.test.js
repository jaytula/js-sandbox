/**
 * 
 * @param {number} n 
 */
function digitize(n) {
  return n.toString().split('').map(Number);
}

const { assert } = require("chai");

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(digitize(123), [1, 2, 3]);
    assert.deepEqual(digitize(1), [1]);
    assert.deepEqual(digitize(0), [0]);
    assert.deepEqual(digitize(1230), [1, 2, 3, 0]);
    assert.deepEqual(digitize(8675309), [8, 6, 7, 5, 3, 0, 9]);
  });
});
