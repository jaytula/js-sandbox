/**
 *
 * @param {number} balls
 */
function pyramid(balls) {
  let levels = 0;
  while (balls > 0) {
    if (balls >= levels + 1) {
      levels += 1;
      balls -= levels;
    } else {
      break;
    }
  }
  return levels;
}

const { assert } = require("chai");

describe("Basic tests", function () {
  it("Testing for balls: 1", function () {
    assert.strictEqual(pyramid(1), 1);
  });
  it("Testing for balls: 4", function () {
    assert.strictEqual(pyramid(4), 2);
  });
  it("Testing for balls: 20", function () {
    assert.strictEqual(pyramid(20), 5);
  });
  it("Testing for balls: 100", function () {
    assert.strictEqual(pyramid(100), 13);
  });
  it("Testing for balls: 9999", function () {
    assert.strictEqual(pyramid(9999), 140);
  });
});
