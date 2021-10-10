/**
 * 
 * @param {number[]} arr 
 */
var isSquare = function (arr) {
  if(!arr.length) return;
  return arr.every(num => Math.sqrt(num) % 1 === 0)
};

const Test = require("@codewars/test-compat");

describe("isSquare", function () {
  it("Basic tests", function () {
    Test.assertEquals(isSquare([1, 4, 9, 16, 25, 36]), true);
    Test.assertEquals(isSquare([1, 2, 3, 4, 5, 6]), false);
    Test.assertEquals(isSquare([]), undefined);
    Test.assertEquals(isSquare([1, 2, 4, 15]), false);
  });
});
