/**
 *
 * @param {number} N
 * @param {number} P
 * @returns
 */
function redKnight(N, P) {
  return [(P + N) % 2 ? "Black" : "White", P * 2];
}

const chai = require("chai");
const assert = chai.assert;

describe("Red Knight", function () {
  it("should return the output provided", function () {
    assert.deepEqual(redKnight(0, 8), ["White", 16]);
    assert.deepEqual(redKnight(0, 7), ["Black", 14]);
    assert.deepEqual(redKnight(1, 6), ["Black", 12]);
    assert.deepEqual(redKnight(1, 5), ["White", 10]);
  });
});
