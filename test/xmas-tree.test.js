/**
 * 
 * @param {number} n 
 */
function xMasTree(n) {
  const result = []
  for(let i = 1; i <= n; i++) {
    const hashes = '#'.repeat(1 + (i-1)*2)
    const blanks = '_'.repeat(n-i)
    result.push(blanks + hashes + blanks);
  }

  result.push('_'.repeat(n-1) + '#' + '_'.repeat(n-1))
  result.push('_'.repeat(n-1) + '#' + '_'.repeat(n-1))

  return result;
}

const Test = require("@codewars/test-compat");

describe("Xmas Tree", () => {
  it("test", () => {
    Test.assertDeepEquals(xMasTree(3), [
      "__#__",
      "_###_",
      "#####",
      "__#__",
      "__#__",
    ]);
    Test.assertDeepEquals(xMasTree(7), [
      "______#______",
      "_____###_____",
      "____#####____",
      "___#######___",
      "__#########__",
      "_###########_",
      "#############",
      "______#______",
      "______#______",
    ]);
    Test.assertDeepEquals(xMasTree(2), ["_#_", "###", "_#_", "_#_"]);
    Test.assertDeepEquals(xMasTree(4), [
      "___#___",
      "__###__",
      "_#####_",
      "#######",
      "___#___",
      "___#___",
    ]);
    Test.assertDeepEquals(xMasTree(6), [
      "_____#_____",
      "____###____",
      "___#####___",
      "__#######__",
      "_#########_",
      "###########",
      "_____#_____",
      "_____#_____",
    ]);
  });
});
