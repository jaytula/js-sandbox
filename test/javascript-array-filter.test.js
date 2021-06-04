/**
 * 
 * @param {number[]} numbersArray 
 */
function getEvenNumbers(numbersArray) {
  return numbersArray.filter(num => num % 2 === 0)
}

const assert = require("chai").assert;

describe("Fixed tests", () => {
  it("should return an empty array if there are no even numbers", function () {
    assert.deepEqual(getEvenNumbers([1, 2, 3, 6, 8, 10]), [2, 6, 8, 10]);
    assert.deepEqual(getEvenNumbers([1, 2]), [2]);
    assert.deepEqual(getEvenNumbers([12, 14, 15]), [12, 14]);
    assert.deepEqual(getEvenNumbers([13, 15]), []);
    assert.deepEqual(getEvenNumbers([1, 3, 9]), []);
  });
});
