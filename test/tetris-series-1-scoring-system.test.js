/**
 * 
 * @param {number[]} arr 
 */
function getScore(arr) {
  const SCORE = [0, 40, 100, 300, 1200]
  let linesCleared = 0;
  let totalScore = 0;

  for(let lines of arr) {
    totalScore += SCORE[lines] * (Math.floor(linesCleared / 10) + 1);
    linesCleared += lines;
  }

  return totalScore;
}

const assert = require('chai').assert;

describe("Basic tests", () => {
  const testing = (arr, exp) => it(`Testing for [${arr.join(', ')}]`, () => assert.equal(getScore(arr), exp));
  testing([0, 1, 2, 3, 4], 1640);
  testing([0, 1, 1, 3, 0, 2, 1, 2], 620);
  testing([2, 0, 4, 2, 2, 3, 0, 0, 3, 3], 3300);
  testing([0], 0);
  testing([], 0);
});