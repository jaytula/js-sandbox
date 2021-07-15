/**
 *
 * @param {number[]} arr
 */
function solve(arr) {
  /**
   * @type {{[key: number]: Set<number>}}
   */
  const numberMap = {};

  for (let num of arr) {
    const absNum = Math.abs(num);
    if (!(absNum in numberMap)) numberMap[absNum] = new Set();
    numberMap[absNum].add(num);
  }

  return Object.values(numberMap)
    .find((set) => set.size === 1)
    .values()
    .next().value;
}

const Test = require("@codewars/test-compat");

it("Array element parity", function () {
  Test.assertEquals(solve([1, -1, 2, -2, 3]), 3);
  Test.assertEquals(solve([-3, 1, 2, 3, -1, -4, -2]), -4);
  Test.assertEquals(solve([1, -1, 2, -2, 3, 3]), 3);
  Test.assertEquals(solve([-110, 110, -38, -38, -62, 62, -38, -38, -38]), -38);
  Test.assertEquals(solve([-9, -105, -9, -9, -9, -9, 105]), -9);
});
