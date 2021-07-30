/**
 *
 * @param {number} number
 * @returns
 */
function balancedNum(number) {
  const nums = number.toString().split("");
  if (nums.length % 2 === 0) {
    nums.splice(Math.floor(nums.length / 2 - 1), 2);
  } else {
    nums.splice(Math.floor(nums.length / 2), 1);
  }

  const midIndex = nums.length / 2;
  const leftSide = nums
    .slice(0, midIndex)
    .reduce((acc, curr) => acc + +curr, 0);
  const rightSide = nums.slice(midIndex).reduce((acc, curr) => acc + +curr, 0);

  return leftSide === rightSide ? "Balanced" : "Not Balanced";
}

const Test = require("@codewars/test-compat");

describe("Balanced Number (Special Numbers Series #1)", function () {
  xit("Check balanced number", function () {
    Test.assertDeepEquals(balancedNum(7), "Balanced");
    Test.assertDeepEquals(balancedNum(959), "Balanced");
    Test.assertDeepEquals(balancedNum(13), "Balanced");
    Test.assertDeepEquals(balancedNum(432), "Not Balanced");
    Test.assertDeepEquals(balancedNum(424), "Balanced");
  });
  it("Check Larger number", function () {
    Test.assertDeepEquals(balancedNum(1024), "Not Balanced");
    Test.assertDeepEquals(balancedNum(66545), "Not Balanced");
    Test.assertDeepEquals(balancedNum(295591), "Not Balanced");
    Test.assertDeepEquals(balancedNum(1230987), "Not Balanced");
    Test.assertDeepEquals(balancedNum(56239814), "Balanced");
  });
});
