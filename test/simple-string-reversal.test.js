/**
 *
 * @param {string} str
 */
function solve(str) {
  const spaceIndexes = str
    .split("")
    .reduce((acc, curr, idx) => acc.concat(curr === " " ? idx : []), []);
  const charArray = str.replace(/ /g, "").split("").reverse();
  for (let idx of spaceIndexes) {
    charArray.splice(idx, 0, [" "]);
  }

  return charArray.join("");
}

const Test = require("@codewars/test-compat");

test("Simple String Reversal", function () {
  // Test.assertEquals(solve("codewars"), "srawedoc");
  // Test.assertEquals(solve("your code"), "edoc ruoy");
  Test.assertEquals(solve("your code rocks"), "skco redo cruoy");
  // Test.assertEquals(solve("i love codewars"), "s rawe docevoli");
});
