/**
 *
 * @param {string} s
 * @param {string} str1
 * @param {string} str2
 */
function isMatching(s, str1, str2) {
  s = s.toLowerCase().replace(/ /g, "").split("").sort().join("");
  const otherString = (str1 + str2)
    .toLowerCase()
    .replace(/ /g, "")
    .split("")
    .sort()
    .join("");

  return s === otherString;
}

const Test = require("@codewars/test-compat");

describe("String Matcher", function () {
  it("returns false for 'bouh'", function () {
    Test.assertEquals(isMatching("bouh", "0", "buh"), false);
  });
  it("returns false for 'kitten'", function () {
    Test.assertEquals(isMatching("kitten", "t", "eink"), false);
  });
  it("returns false for 'mentalist'", function () {
    Test.assertEquals(isMatching("mentalist", "l.st", "metan"), false);
  });
  it("returns true for 'impressionistic'", function () {
    Test.assertEquals(
      isMatching("impressionistic", "isis isi", "precomnt"),
      true
    );
  });
  it("returns true for 'email box'", function () {
    Test.assertEquals(isMatching("email box", "bail", "moxe"), true);
  });
  it("returns false for 'detail'", function () {
    Test.assertEquals(isMatching("detail", "tlei", "dai"), false);
  });
});
