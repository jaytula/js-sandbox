/**
 *
 * @param {string[]} words
 */
const palindromePairs = words => {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i == j) continue;
      const palindrome = words[i].toString() + words[j].toString();
      if (palindrome === palindrome.split("").reverse().join(""))
        result.push([i, j]);
    }
  }

  return result;
};

const Test = require("@codewars/test-compat");

describe("Solution", function () {
  it("should return the right pairs", function () {
    Test.assertDeepEquals(palindromePairs(["bat", "tab", "cat"]), [
      [0, 1],
      [1, 0],
    ]);
    Test.assertDeepEquals(
      palindromePairs(["dog", "cow", "tap", "god", "pat"]),
      [
        [0, 3],
        [2, 4],
        [3, 0],
        [4, 2],
      ]
    );
    Test.assertDeepEquals(
      palindromePairs(["abcd", "dcba", "lls", "s", "sssll"]),
      [
        [0, 1],
        [1, 0],
        [2, 4],
        [3, 2],
      ]
    );
  });
});
