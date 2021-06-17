/**
 * 
 * @param {number} n 
 * @returns 
 */
function whatNumberIsIt(n) {
  if (n === Number.MAX_VALUE) return "Input number is Number.MAX_VALUE";
  if (n === Number.MIN_VALUE) return "Input number is Number.MIN_VALUE";
  if (n === Number.NEGATIVE_INFINITY)
    return "Input number is Number.NEGATIVE_INFINITY";
  if (n === Number.POSITIVE_INFINITY)
    return "Input number is Number.POSITIVE_INFINITY";
  if (Number.isNaN(n))
    return "Input number is Number.NaN";

  return `Input number is ${n}`;
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(
      whatNumberIsIt(1 / 0),
      "Input number is Number.POSITIVE_INFINITY"
    );
    Test.assertDeepEquals(whatNumberIsIt(100), "Input number is 100");
    Test.assertDeepEquals(
      whatNumberIsIt(1.7976931348623157e308),
      "Input number is Number.MAX_VALUE"
    );
    Test.assertDeepEquals(
      whatNumberIsIt(5e-324),
      "Input number is Number.MIN_VALUE"
    );
    Test.assertDeepEquals(
      whatNumberIsIt(-Number.MAX_VALUE * 2),
      "Input number is Number.NEGATIVE_INFINITY"
    );
    Test.assertDeepEquals(whatNumberIsIt(NaN), "Input number is Number.NaN");
    Test.assertDeepEquals(
      whatNumberIsIt(Infinity + 1),
      "Input number is Number.POSITIVE_INFINITY"
    );
  });
});
