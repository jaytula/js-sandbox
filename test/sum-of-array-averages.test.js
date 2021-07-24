/**
 *
 * @param {number[][]} arr
 * @returns
 */
const sumAverage = (arr) => {
  return Math.floor(
    arr.reduce((acc, curr) => {
      return acc + curr.reduce((total, num) => total + num, 0) / curr.length;
    }, 0)
  );
};

const Test = require("@codewars/test-compat");

describe("Sum of Array Averages", () => {
  it("test", () => {
    Test.assertEquals(
      sumAverage([
        [3, 4, 1, 3, 5, 1, 4],
        [21, 54, 33, 21, 77],
      ]),
      44
    );
    Test.assertEquals(
      sumAverage([
        [-4, 3, -8, -2],
        [2, 9, 1, -5],
        [-7, -2, -6, -4],
      ]),
      -6
    );
  });
});
