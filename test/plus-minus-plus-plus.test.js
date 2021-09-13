/**
 *
 * @param {number[]} arr
 * @returns
 */
const catchSignChange = (arr) => {
  let count = 0;
  let isNegative = arr[0] < 0;

  arr.slice(1).forEach((num) => {
    if (num < 0 !== isNegative) {
      count++;
    }
    isNegative = num < 0;
  });

  return count;
};

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(catchSignChange([1, 3, 4, 5]), 0);
    Test.assertEquals(catchSignChange([1, -3, -4, 0, 5]), 2);
    Test.assertEquals(catchSignChange([]), 0);
    Test.assertEquals(catchSignChange([-47, 84, -30, -11, -5, 74, 77]), 3);
  });
});
