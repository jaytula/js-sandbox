/**
 *
 * @param {number[][]} board
 */
function isSolved(board) {
  const sequence = board.reduce((acc, curr) => acc.concat(curr), []);
  return sequence.every((val, idx) => idx === 0 || val > sequence[idx - 1]);
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("tests", function () {
  it("given [[0, 1],[2, 3]]", function() {
    assert.deepEqual(isSolved([[0, 1],[2, 3]]), true);
  });
  it("given [[1, 0],[3, 2]]", function () {
    assert.deepEqual(
      isSolved([
        [1, 0],
        [3, 3],
      ]),
      false
    );
  });
});
