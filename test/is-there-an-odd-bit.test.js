/**
 * 
 * @param {number} x 
 */
function anyOdd(x) {
  return (x & 0xAAAAAAAA) !== 0 ? 1 : 0;
}

const assert = require('chai').assert;

describe("Solution", () => {
  it("basic tests", () => {
    assert.strictEqual(anyOdd(2863311530), 1);
    assert.strictEqual(anyOdd(128), 1);
    assert.strictEqual(anyOdd(131), 1);
    assert.strictEqual(anyOdd(2), 1);
    assert.strictEqual(anyOdd(24082), 1);
    assert.strictEqual(anyOdd(0), 0);
    assert.strictEqual(anyOdd(85), 0);
    assert.strictEqual(anyOdd(1024), 0);
    assert.strictEqual(anyOdd(1), 0);
    assert.strictEqual(anyOdd(1365), 0);
  });
});
