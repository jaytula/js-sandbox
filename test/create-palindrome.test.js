/**
 *
 * @param {string} s
 */
function solve(s) {
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] === s[s.length - 1 - i]) continue;
    if (Math.abs(s.charCodeAt(i) - s.charCodeAt(s.length - 1 - i)) !== 2)
      return false;
  }
  return true;
}

const Test = require("@codewars/test-compat");

it("Create palindrome", function () {
  Test.assertDeepEquals(solve("abba"), true);
  Test.assertDeepEquals(solve("abaazaba"), false);
  Test.assertDeepEquals(solve("abccba"), true);
  Test.assertDeepEquals(solve("adfa"), true);
  Test.assertDeepEquals(solve("ae"), false);
  Test.assertDeepEquals(solve("abzy"), false);
  Test.assertDeepEquals(solve("ababbaba"), true);
  Test.assertDeepEquals(solve("sq"), true);
  Test.assertDeepEquals(
    solve(
      "kxbkwgyydkcbtjcosgikfdyhuuprubpwthgflucpyylbofvqxkkvqthmdnywpaunfihvupbwpruwfybdmgeuocltdaidyyewmbzm"
    ),
    true
  );
});
