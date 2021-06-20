/**
 * 
 * @param {number} start 
 * @param {number} end 
 */
var paintLetterboxes = function (start, end) {
  const result = [0,0,0,0,0,0,0,0,0,0]

  for(let num = start; num <= end; num++) {
    num.toString().split('').forEach(ch => {
      result[ch]++;
    })
  }

  return result;
}

const { assert } = require("chai");

describe("Example Tests", function () {
  it("ex", function () {
    assert.deepEqual(
      paintLetterboxes(125, 132),
      [1, 9, 6, 3, 0, 1, 1, 1, 1, 1]
    );
  });
})
