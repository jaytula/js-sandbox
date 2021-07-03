/**
 *
 * @param {string} a
 * @param {string} b
 * @param {string} c
 * @param {string} d
 */
function guessHatColor(a, b, c, d) {
  return b === c ? 1 : 2;
}

const Test = require("@codewars/test-compat");

describe("Guess Hat Color", function () {
  it("It should works for basic tests.", function () {
    Test.assertEquals(guessHatColor("black", "white", "black", "white"), 2);

    Test.assertEquals(guessHatColor("white", "black", "white", "black"), 2);

    Test.assertEquals(guessHatColor("white", "black", "black", "white"), 1);
  });
});
