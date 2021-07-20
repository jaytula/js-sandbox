/**
 *
 * @param {number} n
 * @param {number} m
 */
function game(n, m) {
  if (m == 2) return "second";
  return n % 2 ? "first" : "second";
}

const Test = require("@codewars/test-compat");

describe("Simple Game", function () {
  it("basic tests", function () {
    [
      { n: 3, m: 7, winner: "first" },
      { n: 6, m: 12, winner: "second" },
      { n: 2, m: 4, winner: "second" },
      { n: 9485, m: 9492, winner: "first" },
    ].forEach((t) =>
      Test.assertEquals(
        game(t.n, t.m),
        t.winner,
        `wrong in test n=${t.n}, m=${t.m}`
      )
    );
  });
});
