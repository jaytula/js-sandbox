/**
 *
 * @param {number[]} b
 */
function positiveToNegative(b) {
  const inverted = b.map((el) => (el === 0 ? 1 : 0));

  inverted[inverted.length - 1] += 1;
  for (let i = inverted.length - 1; i >= 0; i--) {
    if (inverted[i] === 2) {
      inverted[i] = 0;
      if (i !== 0) {
        inverted[i - 1] += 1;
      }
    }
  }
  return inverted;
}

const chai = require("chai");
const assert = chai.assert;

describe("Tests", () => {
  it("Fixed Tests", () => {
    assert.deepStrictEqual(positiveToNegative([0, 0, 0, 0]), [0, 0, 0, 0]);
    assert.deepStrictEqual(positiveToNegative([0, 0, 1, 0]), [1, 1, 1, 0]);
    assert.deepStrictEqual(positiveToNegative([0, 0, 1, 1]), [1, 1, 0, 1]);
    assert.deepStrictEqual(positiveToNegative([0, 1, 0, 0]), [1, 1, 0, 0]);
  });
});
