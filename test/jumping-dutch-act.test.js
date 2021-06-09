/**
 *
 * @param {number} floor
 * @returns
 */
function sc(floor) {
  return floor <= 1
    ? ""
    : "Aa~ ".repeat(floor - 1) + (floor <= 6 ? "Pa! Aa!" : "Pa!");
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(sc(2), "Aa~ Pa! Aa!", "good luck!");
    Test.assertDeepEquals(sc(6), "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!", "good luck!");
    Test.assertDeepEquals(sc(7), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!");
    Test.assertDeepEquals(
      sc(10),
      "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!",
      "good luck!"
    );
    Test.assertDeepEquals(sc(1), "", "good luck!");
    Test.assertDeepEquals(sc(-1), "", "good luck!");
  });
});
