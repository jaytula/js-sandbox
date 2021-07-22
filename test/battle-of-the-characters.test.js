/**
 *
 * @param {string} x
 * @param {string} y
 */
function battle(x, y) {
  /**
   *
   * @param {string} ch
   */
  function getPower(ch) {
    return ch.charCodeAt(0) - 64;
  }

  const xPower = x.split("").reduce((acc, curr) => acc + getPower(curr), 0);
  const yPower = y.split("").reduce((acc, curr) => acc + getPower(curr), 0);

  return xPower === yPower ? "Tie!" : xPower > yPower ? x : y;
}

const Test = require("@codewars/test-compat");

it("Battle of the characters (Easy)", function () {
  Test.assertEquals(battle("AAA", "Z"), "Z", "Unfair fight!");
  Test.assertEquals(battle("ONE", "TWO"), "TWO", "Unfair fight!");
  Test.assertEquals(battle("ONE", "NEO"), "Tie!", "Unfair fight!");
  Test.assertEquals(battle("FOUR", "FIVE"), "FOUR", "Unfair fight!");
});
