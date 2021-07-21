/**
 *
 * @param {number} length
 * @param {number} maxHookDist
 */
function numberOfHooks(length, maxHookDist) {
  return 2 ** Math.ceil(Math.log2(length / Math.min(length, maxHookDist))) + 1;
}

const { assert } = require("chai");

describe("Hanging the curtains", () => {
  it("Integer Test Cases", () => {
    assert.strictEqual(numberOfHooks(225, 45), 9);
    assert.strictEqual(numberOfHooks(180, 22), 17);
    assert.strictEqual(numberOfHooks(100, 35), 5);
    assert.strictEqual(numberOfHooks(90, 50), 3);
    assert.strictEqual(numberOfHooks(245, 9), 33);
    assert.strictEqual(numberOfHooks(315, 7), 65);
    assert.strictEqual(numberOfHooks(405, 5), 129);
  });

  it("Float Test Cases", () => {
    assert.strictEqual(numberOfHooks(100.5, 25), 9);
    assert.strictEqual(numberOfHooks(100, 25.5), 5);
    assert.strictEqual(numberOfHooks(185.5, 15.5), 17);
    assert.strictEqual(numberOfHooks(99.3, 13.6), 9);
    assert.strictEqual(numberOfHooks(247.12, 9.17), 33);
    assert.strictEqual(numberOfHooks(315.87, 7.01), 65);
    assert.strictEqual(numberOfHooks(405.75, 5.45), 129);
  });

  it("Edge Test Cases", () => {
    assert.strictEqual(numberOfHooks(100, 100), 2);
    assert.strictEqual(numberOfHooks(25, 100), 2);
  });
});
