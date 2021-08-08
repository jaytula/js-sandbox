/**
 *
 * @param {string} str
 */
function swapVowelCase(str) {
  return str.replace(/[aeiou]/gi, ch =>
    ch === ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase()
  );
}

const chai = require("chai");
const assert = chai.assert;

describe("Swap vowel case", function () {
  it("Sample tests", function () {
    assert.equal(swapVowelCase(" "), " ");
    assert.equal(swapVowelCase("C Is AlIvE!"), "C is alive!");
    assert.equal(swapVowelCase("to"), "tO");
    assert.equal(swapVowelCase("The"), "ThE");
  });
});
