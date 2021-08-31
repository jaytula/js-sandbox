/**
 *
 * @param {string} eq
 */
function solve(eq) {
  return eq
    .split("")
    .reverse("")
    .join("")
    .replace(/(\d+)/g, (s) => s.split("").reverse("").join(""));
}

const Test = require("@codewars/test-compat");
it("Basic tests", function () {
  Test.assertEquals(solve("100*b/y"), "y/b*100");
  Test.assertEquals(solve("a+b-c/d*30"), "30*d/c-b+a");
  Test.assertEquals(solve("a*b/c+50"), "50+c/b*a");
});
