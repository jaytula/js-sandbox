/**
 *
 * @param {string} number
 */
function convert(number) {
  return number
    .match(/.{2}/g)
    .reduce((acc, curr) => acc + String.fromCharCode(+curr), "");
}

const Test = require("@codewars/test-compat");

describe("ASCII letters from Number", () => {
  it("test", () => {
    Test.assertEquals(convert("65"), "A");
    Test.assertEquals(convert("656667"), "ABC");
    Test.assertEquals(convert("676584"), "CAT");
    Test.assertEquals(
      convert("73327673756932858080698267658369"),
      "I LIKE UPPERCASE"
    );
  });
});
