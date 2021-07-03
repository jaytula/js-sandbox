/**
 *
 * @param {number} totalCandles
 * @param {string} s
 */
function cake(totalCandles, s) {
  const fallenCandles = s.split("").reduce((acc, ch, idx) => {
    return (
      acc +
      (idx % 2 === 0 ? ch.charCodeAt(0) : ch.charCodeAt(0) - "a".charCodeAt(0) + 1)
    );
  }, 0);
  console.log({fallenCandles, totalCandles, percent: fallenCandles / totalCandles})
  return fallenCandles / totalCandles > 0.7 ? "Fire!" : "That was close!";
}

const Test = require("@codewars/test-compat");

describe("Birthday I - Cake", () => {
  it("test", () => {
    Test.assertEquals(cake(900, "abcdef"), "That was close!");
    Test.assertEquals(cake(56, "ifkhchlhfd"), "Fire!");
    Test.assertEquals(cake(256, "aaaaaddddr"), "Fire!");
    Test.assertEquals(cake(488, "nlhkib"), "Fire!");

  });
});
