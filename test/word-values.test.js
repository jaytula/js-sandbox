/**
 *
 * @param {string[]} arr
 * @returns
 */
function wordValue(arr) {
  const baseCode = "a".charCodeAt(0) - 1;
  return arr.map((item, idx) => {
    const position = idx + 1;
    return (
      item
        .replace(/[^a-z]/g, "")
        .split("")
        .reduce((acc, curr) => acc + (curr.charCodeAt(0) - baseCode), 0) *
      position
    );
  });
}

const Test = require("@codewars/test-compat");

describe("Word values", function () {
  it("simple examples", function () {
    Test.assertDeepEquals(wordValue(["codewars", "abc", "xyz"]), [88, 12, 225]);
    Test.assertDeepEquals(
      wordValue(["abc abc", "abc abc", "abc", "abc"]),
      [12, 24, 18, 24]
    );
  });
});
