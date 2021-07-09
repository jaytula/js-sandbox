/**
 *
 * @param {string[]} bobsDecisions
 * @param {string[]} expertDecisions
 */
 function correctness(bobsDecisions, expertDecisions) {
  let score = 0;
  for (let i = 0; i < bobsDecisions.length; i++) {
    if (bobsDecisions[i] === "?" && expertDecisions[i] === "?") {
      score += 1;
      continue;
    }
    if (bobsDecisions[i] === "?" || expertDecisions[i] === "?") {
      score += 0.5;
      continue;
    }
    score += bobsDecisions[i] === expertDecisions[i] ? 1 : 0;
  }
  return score;
}

const Test = require("@codewars/test-compat");

describe("Chicken Sexing", () => {
  it("test", () => {
    Test.assertEquals(
      correctness(["M", "?", "M"], ["M", "F", "?"]),
      2,
      "guessed"
    );
  });
});
