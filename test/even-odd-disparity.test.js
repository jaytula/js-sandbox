/**
 *
 * @param {(number | string)[]} arr
 * @returns
 */
function solve(arr) {
  return arr
    .filter((num) => typeof num === "number")
    .reduce((acc, curr) => acc + (curr % 2 === 0 ? 1 : -1), 0);
}

const Test = require("@codewars/test-compat");

it("Basic tests", function () {
  Test.assertEquals(solve([0, 1, 2, 3]), 0);
  Test.assertEquals(solve([0, 1, 2, 3, "a", "b"]), 0);
  Test.assertEquals(
    solve([0, 15, "z", 16, "m", 13, 14, "c", 9, 10, 13, "u", 4, 3]),
    0
  );
  Test.assertEquals(solve([13, 6, 8, 15, 4, 8, 13]), 1);
  Test.assertEquals(solve([1, "a", 17, 8, "e", 3, "i", 12, 1]), -2);
  Test.assertEquals(
    solve([
      5,
      15,
      16,
      10,
      6,
      4,
      16,
      "t",
      13,
      "n",
      14,
      "k",
      "n",
      0,
      "q",
      "d",
      7,
      9,
    ]),
    2
  );
});
