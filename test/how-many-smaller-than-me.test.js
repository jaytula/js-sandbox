/**
 *
 * @param {number[]} nums
 */
function smaller(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    result.push(
      nums.slice(i + 1).reduce((acc, curr) => acc + (curr < nums[i] ? 1 : 0), 0)
    );
  }

  return result;
}

const Test = require("@codewars/test-compat");

it("How many are smaller than me?", () => {
  Test.assertDeepEquals(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
  Test.assertDeepEquals(smaller([1, 2, 3]), [0, 0, 0]);
  Test.assertDeepEquals(smaller([1, 2, 0]), [1, 1, 0]);
  Test.assertDeepEquals(smaller([1, 2, 1]), [0, 1, 0]);
  Test.assertDeepEquals(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
  Test.assertDeepEquals(
    smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]),
    [4, 1, 5, 5, 0, 0, 0, 0, 0]
  );
});
