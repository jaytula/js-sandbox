/**
 *
 * @param {string} s
 */
function evenChars(s) {
  return s.length < 2 || s.length > 100
    ? "invalid string"
    : s.split("").filter((_, idx) => idx % 2);
}

const Test = require("@codewars/test-compat");

describe("Return a strings even characters", () => {
  it("test", () => {
    Test.assertDeepEquals(evenChars("a"), "invalid string");
    Test.assertDeepEquals(evenChars("abcdefghijklm"), [
      "b",
      "d",
      "f",
      "h",
      "j",
      "l",
    ]);
  });
});
