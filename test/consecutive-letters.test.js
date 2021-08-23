/**
 *
 * @param {string} s
 */
function solve(s) {
  s = s.split("").sort();
  for (let i = 1; i < s.length; i++) {
    if (s[i].charCodeAt(0) !== s[i - 1].charCodeAt(0) + 1) return false;
  }
  return true;
}

const Test = require("@codewars/test-compat");

it("Basic tests", function () {
  Test.assertEquals(solve("dabc"), true);
  Test.assertEquals(solve("abd"), false);
  Test.assertEquals(solve("dabc"), true);
  Test.assertEquals(solve("abbc"), false);
  Test.assertEquals(solve("nahgxogxqalahawkmjtxgypgc"), false);
});
