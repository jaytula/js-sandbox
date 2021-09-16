/**
 *
 * @param {string} n
 * @returns
 */
function initials(n) {
  const words = n.split(" ");
  return words
    .map((word, idx) =>
      idx === words.length - 1
        ? word[0].toUpperCase() + word.slice(1)
        : word[0].toUpperCase()
    )
    .join(".");
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(initials("code wars"), "C.Wars");
    Test.assertDeepEquals(initials("Barack hussain obama"), "B.H.Obama");
    Test.assertDeepEquals(initials("barack hussain Obama"), "B.H.Obama");
  });
});
