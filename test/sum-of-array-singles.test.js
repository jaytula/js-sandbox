/**
 *
 * @param {number[]} arr
 */
function repeats(arr) {
  /**
   * @type {{[key: str]: number}}
   */
  const d = {};
  for (let num of arr) {
    if (!(num.toString() in d)) d[num.toString()] = 0;
    d[num.toString()] = d[num.toString()] + 1;
  }

  return Object.entries(d).reduce(
    (acc, [num, count]) => acc + (count === 1 ? +num : 0),
    0
  );
}

const Test = require("@codewars/test-compat");

it("Basic tests", function () {
  Test.assertEquals(repeats([4, 5, 7, 5, 4, 8]), 15);
  Test.assertEquals(repeats([9, 10, 19, 13, 19, 13]), 19);
  Test.assertEquals(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12);
  Test.assertEquals(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22);
  Test.assertEquals(repeats([5, 10, 19, 13, 10, 13]), 24);
});
