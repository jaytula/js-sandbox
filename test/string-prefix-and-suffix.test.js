/**
 *
 * @param {string} s
 */
function solve(s) {
  let count = 0;

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s.slice(0, i + 1) === s.slice(s.length - 1 - i)) {
      count = i + 1;
    }
  }

  return count;
}

const Test = require("@codewars/test-compat");

it("Basic tests", function () {
  Test.assertEquals(solve("abcd"), 0);
  Test.assertEquals(solve("abcda"), 1);
  Test.assertEquals(solve("abcdabc"), 3);
  Test.assertEquals(solve("abcabc"), 3);
  Test.assertEquals(solve("abcabca"), 1);
  Test.assertEquals(solve("aaaa"), 2);
  Test.assertEquals(solve("aa"), 1);
  Test.assertEquals(solve("a"), 0);
});
