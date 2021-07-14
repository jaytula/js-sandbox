/**
 *
 * @param {string[]} a1
 * @param {string[]} a2
 */
function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;

  const a1Lengths = a1.map((el) => el.length);
  const a2Lengths = a2.map((el) => el.length);

  const [a1Min, a1Max] = [Math.min(...a1Lengths), Math.max(...a1Lengths)];
  const [a2Min, a2Max] = [Math.min(...a2Lengths), Math.max(...a2Lengths)];
  return Math.max(a1Max - a2Min, a2Max - a1Min);
}

const Test = require("@codewars/test-compat");

describe("Maximum Length Difference", function () {
  it("Basic tests", function () {
    var s1 = [
      "hoqq",
      "bbllkw",
      "oox",
      "ejjuyyy",
      "plmiis",
      "xxxzgpsssa",
      "xxwwkktt",
      "znnnnfqknaz",
      "qqquuhii",
      "dvvvwz",
    ];
    var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
    Test.assertEquals(mxdiflg(s1, s2), 13);
  });
});
