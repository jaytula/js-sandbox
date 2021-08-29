/**
 *
 * @param {string} str
 */
function solve(str) {
  const isPalindrome = s => {
    return s === s.split('').reverse().join('')
  }

  if(isPalindrome(str) && str.length % 2 === 0) return false
  if(isPalindrome(str) && str.length % 2 === 1) return true

  let diffCount = 0

  for(let i = 0; i < str.length / 2; i++) {
    if(str[i] !== str[str.length - 1 -i]) diffCount++
  }

  return diffCount === 1
}

const Test = require("@codewars/test-compat");

it("Basic tests", function () {
  Test.assertEquals(solve("abba"), false);
  Test.assertEquals(solve("abbaa"), true);
  Test.assertEquals(solve("abbx"), true);
  Test.assertEquals(solve("aa"), false);
  Test.assertEquals(solve("ab"), true);
  Test.assertEquals(solve("abcba"), true);
});
