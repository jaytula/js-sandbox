/**
 *
 * @param {string} s
 * @returns
 */
function alternateCase(s) {
  return s
    .split("")
    .map((ch) =>
      ch === ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase()
    )
    .join("");
}

const Test = require("@codewars/test-compat");

describe("Alternate case", () => {
  it("test", () => {
    Test.assertEquals(alternateCase("abc"), "ABC");
    Test.assertEquals(alternateCase("ABC"), "abc");
    Test.assertEquals(alternateCase("Hello World"), "hELLO wORLD");
  });
});
