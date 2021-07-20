/**
 *
 * @param {number[]} numbersArray
 */
function uniqueNumbers(numbersArray) {
  const result = [];

  for (let num of numbersArray) {
    if (!result.includes(num)) result.push(num);
  }
  return result;
}

const Test = require("@codewars/test-compat");

describe("Unique Numbers", function () {
  it("test 1", function () {
    var numbers = uniqueNumbers([1, 1, 2, 2]);
    Test.assertDeepEquals(numbers, [1, 2]);
  });
});
