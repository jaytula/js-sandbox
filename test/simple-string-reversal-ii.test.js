/**
 *
 * @param {string} st
 * @param {number} a
 * @param {number} b
 */
function solve(st, a, b) {
  b = Math.min(b, st.length-1)
  const reversedSegment = st.slice(a, b+1).split('').reverse().join('')
  return st.slice(0, a) + reversedSegment + st.slice(b+1)
}

const Test = require("@codewars/test-compat");

it("Basic tests", function () {
  Test.assertEquals(solve("codewars", 1, 5), "cawedors");
  Test.assertEquals(solve("codingIsFun", 2, 100), "conuFsIgnid");
  Test.assertEquals(
    solve("FunctionalProgramming", 2, 15),
    "FuargorPlanoitcnmming"
  );
  Test.assertEquals(
    solve("abcdefghijklmnopqrstuvwxyz", 0, 20),
    "utsrqponmlkjihgfedcbavwxyz"
  );
  Test.assertEquals(
    solve("abcdefghijklmnopqrstuvwxyz", 5, 20),
    "abcdeutsrqponmlkjihgfvwxyz"
  );
});
