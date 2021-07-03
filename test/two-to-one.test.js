/**
 *
 * @param {string} s1
 * @param {string} s2
 */
function longest(s1, s2) {
  return [...new Set((s1 + s2).split("")).values()].sort().join("");
}

const Test = require("@codewars/test-compat");

describe("Two to One", function () {
  it("Basic tests", function () {
    Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty");
    Test.assertEquals(
      longest("loopingisfunbutdangerous", "lessdangerousthancoding"),
      "abcdefghilnoprstu"
    );
    Test.assertEquals(
      longest("inmanylanguages", "theresapairoffunctions"),
      "acefghilmnoprstuy"
    );
  });
});
