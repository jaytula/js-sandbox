/**
 *
 * @param {number} n
 */
function friends(n) {
  return n < 3 ? 0 : Math.ceil(Math.log2(n) - 1);
}

const assert = require("chai").assert;

describe("The friends function", function () {
  it("should work for example test cases", function () {
    assert.strictEqual(friends(0), 0);
    assert.strictEqual(friends(1), 0);
    assert.strictEqual(friends(2), 0);
    assert.strictEqual(friends(4), 1);
    assert.strictEqual(friends(16), 3);
    assert.strictEqual(friends(2570), 11);
    assert.strictEqual(friends(99052850), 26);
  });
});
