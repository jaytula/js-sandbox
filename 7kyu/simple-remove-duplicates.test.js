/**
 *
 * @param {number[]} arr
 */
function solve(arr) {
  let result = [];
  arr.reverse().forEach((num) => {
    if (result.indexOf(num) === -1) result.unshift(num);
  });
  return result;
}

test("Basic tests", function () {
  expect(solve([3, 4, 4, 3, 6, 3])).toEqual([4, 6, 3]);
  expect(solve([1, 2, 1, 2, 1, 2, 3])).toEqual([1, 2, 3]);
  expect(solve([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  expect(solve([1, 1, 4, 5, 1, 2, 1])).toEqual([4, 5, 2, 1]);
  expect(solve([1, 2, 1, 2, 1, 1, 3])).toEqual([2, 1, 3]);
});
