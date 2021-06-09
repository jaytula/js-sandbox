/**
 *
 * @param {number[]} arr
 */
function smaller(arr) {
  return arr.map((item, idx) =>
    arr.slice(idx + 1).reduce((acc, curr) => acc + (curr < item ? 1 : 0), 0)
  );
}

const Test = require("@codewars/test-compat");

const MAX = 10000;

describe("Initial Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
    Test.assertDeepEquals(smaller([1, 2, 3]), [0, 0, 0]);
    Test.assertDeepEquals(smaller([1, 2, 0]), [1, 1, 0]);
    Test.assertDeepEquals(smaller([1, 2, 1]), [0, 1, 0]);
    Test.assertDeepEquals(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
    Test.assertDeepEquals(
      smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]),
      [4, 1, 5, 5, 0, 0, 0, 0, 0]
    );

    const largeArrInput = Array.from({length: MAX}, (_, idx) => idx);
    const largeArrExpected = Array.from({length: MAX}, (_, idx) => 0);
    Test.assertDeepEquals(smaller(largeArrInput), largeArrExpected);
  });
});
