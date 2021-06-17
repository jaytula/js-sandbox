/**
 *
 * @param {number} heads
 * @param {number} legs
 */
function animals(heads, legs) {
  if (heads === 0 && legs === 0) return [0, 0];
  if (heads <= 0 || legs <= 0) return "No solutions";

  // Mathematics!:
  // chicken + cow = heads
  // 2x (heads - cow) + 4x cow = legs;
  // 2x heads - 2 x cow + 4x cow = legs;
  // 2x cow = legs - 2x heads;
  // cow = (legs - 2x heads) / 2;

  const cows = (legs - 2 * heads) / 2;
  const chickens = heads - cows;

  if (chickens < 0 || cows < 0 || chickens % 1 !== 0 || cows % 1 !== 0)
    return "No solutions";
  return [chickens, cows];
}

const Test = require("@codewars/test-compat");

describe("Example test cases", function () {
  it("Valid number of animals", function () {
    Test.assertDeepEquals(animals(72, 200), [44, 28]);
    Test.assertDeepEquals(animals(116, 282), [91, 25]);
    Test.assertDeepEquals(animals(12, 24), [12, 0]);
    Test.assertDeepEquals(animals(6, 24), [0, 6]);
    Test.assertDeepEquals(animals(344, 872), [252, 92]);
    Test.assertDeepEquals(animals(158, 616), [8, 150]);
  });

  it("Invalid number of animals", function () {
    Test.assertDeepEquals(animals(25, 555), "No solutions");
    Test.assertDeepEquals(animals(12, 25), "No solutions");
    Test.assertDeepEquals(animals(54, 956), "No solutions");
    Test.assertDeepEquals(animals(5455, 54956), "No solutions");
  });

  it("Edge cases", function () {
    Test.assertDeepEquals(animals(0, 0), [0, 0]);
    Test.assertDeepEquals(animals(-1, -1), "No solutions");
    Test.assertDeepEquals(animals(-45, 5), "No solutions");
    Test.assertDeepEquals(animals(500, 0), "No solutions");
    Test.assertDeepEquals(animals(0, 500), "No solutions");
    Test.assertDeepEquals(animals(5, -55), "No solutions");
  });
});
