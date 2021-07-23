/**
 *
 * @param {number[]} arr
 */
function solve(arr) {
  arr.sort((a, b) => b - a);
  let result = [];
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    result.push(arr[i]);
    result.push(arr[arr.length - 1 - i]);
  }
  if (arr.length % 2 === 1) result.push(arr[Math.floor(arr.length / 2)]);
  return result;
}

const Test = require("@codewars/test-compat");

it("Min-max arrays", function () {
  Test.assertDeepEquals(solve([15, 11, 10, 7, 12]), [15, 7, 12, 10, 11]);
  Test.assertDeepEquals(solve([91, 75, 86, 14, 82]), [91, 14, 86, 75, 82]);
  Test.assertDeepEquals(solve([84, 79, 76, 61, 78]), [84, 61, 79, 76, 78]);
  Test.assertDeepEquals(
    solve([52, 77, 72, 44, 74, 76, 40]),
    [77, 40, 76, 44, 74, 52, 72]
  );
  Test.assertDeepEquals(
    solve([1, 6, 9, 4, 3, 7, 8, 2]),
    [9, 1, 8, 2, 7, 3, 6, 4]
  );
  Test.assertDeepEquals(
    solve([78, 79, 52, 87, 16, 74, 31, 63, 80]),
    [87, 16, 80, 31, 79, 52, 78, 63, 74]
  );
});
