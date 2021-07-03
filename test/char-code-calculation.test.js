/**
 *
 * @param {string} s
 */
function calc(s) {
  return s
    .split("")
    .reduce(
      (acc, ch) =>
        acc + ch.charCodeAt(0).toString().replace(/[^7]/g, "").length * 6,
      0
    );
}

const Test = require("@codewars/test-compat");

describe("Char Code Calculation", () => {
  it("test", () => {
    Test.assertEquals(calc("ABC"), 6);
    Test.assertEquals(calc("abcdef"), 6);
    Test.assertEquals(calc("ifkhchlhfd"), 6);
    Test.assertEquals(calc("aaaaaddddr"), 30);
    Test.assertEquals(
      calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
      96
    );
  });
});
