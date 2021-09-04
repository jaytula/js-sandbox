/**
 * 
 * @param {number} n 
 * @returns 
 */
function solve(n) {
  if (n === 0) return "0";
  if (n === 1) return "01";

  return solve(n - 1) + solve(n - 2);
}

const Test = require("@codewars/test-compat");

it("Basic tests", function () {
  Test.assertEquals(solve(0), "0");
  Test.assertEquals(solve(1), "01");
  Test.assertEquals(solve(2), "010");
  Test.assertEquals(solve(3), "01001");
  Test.assertEquals(solve(5), "0100101001001");
});
