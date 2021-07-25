const solvingScore = {
  1: 1097,
  2: 404,
  3: 149,
  4: 55,
  5: 21,
  6: 8,
  7: 3,
  8: 2,
};

const requiredScore = {
  kyu_8: 0,
  kyu_7: 20,
  kyu_6: 76,
  kyu_5: 229,
  kyu_4: 643,
  kyu_3: 1768,
  kyu_2: 4829,
  kyu_1: 13147,
  dan_1: 35759,
  dan_2: 97225,
};

/**
 *
 * @param {number} score
 * @param {string} current
 */
function howMuchTo(score, current) {
  const [_, kyuDan, level] = current.match(/(kyu|dan)_([1-8])/);
  const solvingLevel = kyuDan === "dan" ? "1" : level;
  const levels = Array.from({ length: solvingLevel }, (_, idx) =>
    (solvingLevel - idx).toString()
  );

  const myBase = requiredScore[current];

  let neededPoints = score - myBase;
  let currentScore = myBase;
  let needSolved = 0;

  if(neededPoints <= 0) return 0;

  for (let level of levels) {
    const consumedPoints =
      level === "1"
        ? neededPoints
        : Math.min(
            requiredScore[`kyu_${level - 1}`] - currentScore,
            neededPoints
          );
    const solvedAtThisLevel = Math.ceil(consumedPoints / solvingScore[level]);
    const finalConsumedPoints = solvedAtThisLevel * solvingScore[level];

    needSolved += solvedAtThisLevel;
    neededPoints -= finalConsumedPoints;
    currentScore += finalConsumedPoints;

    if (neededPoints <= 0) break;
  }

  return needSolved;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('How much Kata should I complete?', () => {
  it(`should return 10`, function () {
    assert.deepEqual(howMuchTo(20, "kyu_8"), 10);
  });
  it(`should return 0`, function () {
    assert.deepEqual(howMuchTo(20, "kyu_7"), 0);
  });
  it(`should return 29`, function () {
    assert.deepEqual(howMuchTo(76, "kyu_8"), 29);
  });
  it(`should return 59`, function () {
    assert.deepEqual(howMuchTo(100000, "dan_1"), 59);
  });
  it(`should return 347`, function () {
    assert.deepEqual(howMuchTo(250000, "kyu_8"), 347);
  });
  it(`should return 0`, function () {
    assert.deepEqual(howMuchTo(25278, "dan_2"), 0);
  });
});
