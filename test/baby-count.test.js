/**
 *
 * @param {string[]} anArr
 * @param {string} name
 */
function countName(anArr, name) {
  return anArr.reduce((acc, curr) => acc + (curr === name ? 1 : 0), 0);
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    const MAINLIST = [
      "Bob",
      "Ted",
      "Amy",
      "Alice",
      "Bob",
      "Ted",
      "Amy",
      "Ted",
      "Amy",
      "Fred",
    ];

    Test.expect(
      countName(MAINLIST, "Ted") == 3,
      "Check your code. Something's off!"
    );
    Test.expect(
      countName(MAINLIST, "Amy") == 3,
      "Check your code. Something's off!"
    );
    Test.expect(
      countName(MAINLIST, "Bob") == 2,
      "Check your code. Something's off!"
    );
  });
});
