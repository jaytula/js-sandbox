/**
 *
 * @param {number[]} arr
 * @returns
 */
function sortTransform(arr) {
  const word1 = [...arr.slice(0, 2), ...arr.slice(arr.length - 2)]
    .map((e) => String.fromCharCode(e))
    .join("");

  arr.sort((a, b) => a - b);
  const word2 = [...arr.slice(0, 2), ...arr.slice(arr.length - 2)]
    .map((e) => String.fromCharCode(e))
    .join("");

  arr.sort((a, b) => b - a);
  const word3 = [...arr.slice(0, 2), ...arr.slice(arr.length - 2)]
    .map((e) => String.fromCharCode(e))
    .join("");

  const alphabetArr = arr.map((num) => String.fromCharCode(num)).sort();
  const word4 = [
    ...alphabetArr.slice(0, 2),
    ...alphabetArr.slice(arr.length - 2),
  ].join("");

  return [word1, word2, word3, word4].join("-");
}

const Test = require("@codewars/test-compat");

describe("Example tests", () => {
  test("test", () => {
    Test.assertDeepEquals(
      sortTransform([121, 122, 123, 124, 125, 120, 122, 132]),
      "yzz-xy}-}yx-xy}"
    );
    Test.assertDeepEquals(
      sortTransform([111, 112, 113, 114, 115, 113, 114, 110]),
      "oprn-nors-sron-nors"
    );
    Test.assertDeepEquals(
      sortTransform([51, 62, 73, 84, 95, 100, 99, 126]),
      "3>c~-3>d~-~d>3-3>d~"
    );
  });
});
