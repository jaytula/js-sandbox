/**
 *
 * @param {string} a
 * @param {string} b
 */
function solve(a, b) {
  return (
    a.replace(new RegExp(`[${b}]`, "g"), "") +
    b.replace(new RegExp(`[${a}]`, "g"), "")
  );
}

const Test = require("@codewars/test-compat");

it("Unique string characters", function () {
  Test.assertEquals(solve("xyab", "xzca"), "ybzc");
  Test.assertEquals(solve("xyabb", "xzca"), "ybbzc");
  Test.assertEquals(solve("abcd", "xyz"), "abcdxyz");
  Test.assertEquals(solve("xxx", "xzca"), "zca");
});
