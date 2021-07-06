/**
 *
 * @param {(' ' | '>' | 'x')[][]} mtrx
 */
const solution = (mtrx) => {
  const rowWithArrow = mtrx.findIndex((row) => row.includes(">"));
  const arrowPosition = mtrx[rowWithArrow].indexOf(">");
  const rowWithTarget = mtrx.findIndex((row) => row.includes("x"));
  const targetPosition = mtrx[rowWithTarget].indexOf("x");

  return rowWithArrow === rowWithTarget && arrowPosition < targetPosition;
};

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Game Hit The Target", function () {
  it("", function () {
    assert.deepEqual(
      solution([
        [">", " "],
        [" ", "x"],
      ]),
      false
    );
  });

  it("", function () {
    assert.deepEqual(
      solution([
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", ">", " ", "x"],
        [" ", " ", "", " ", " "],
      ]),
      true
    );
  });
});
