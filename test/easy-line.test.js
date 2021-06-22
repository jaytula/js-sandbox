/**
 *
 * @param {number} n
 * @returns
 */
function easyLine(n) {
  let result = 0;
  if (n === 1) result = 2;
  else {
    let triangle = [1, 1];
    for (let i = 1; i < n; i++) {
      const newTriangle = [1];
      for (let j = 1; j < triangle.length; j++) {
        newTriangle[j] = triangle[j] + triangle[j - 1];
      }
      newTriangle.push(1);
      triangle = newTriangle;
    }

    result = triangle.reduce((acc, curr) => acc + curr ** 2, 0);
  }

  return Math.round(Math.log(result));
}

const Test = require("@codewars/test-compat");

function testing(actual, expected) {
  Test.assertEquals(actual, expected);
}

describe("Basic tests", function () {
  it("easyLine", function () {
    testing(easyLine(7), 8);
    testing(easyLine(13), 16);
    testing(easyLine(17), 22);
    testing(easyLine(19), 24);
  });
});
