/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} res
 */
function calcType(a, b, res) {
  if (a + b === res) return "addition";
  if (a * b === res) return "multiplication";
  if (a - b === res) return "subtraction";
  return 'division';
}

const Test = require("@codewars/test-compat");

describe("Find the calculation type", function () {
  it("addition", function () {
    Test.assertEquals(calcType(1, 2, 3), "addition");
  });
  it("multiplication", function () {
    Test.assertEquals(calcType(10, 4, 40), "multiplication");
  });
  it("subtraction", function () {
    Test.assertEquals(calcType(10, 5, 5), "subtraction");
  });
  it("division", function () {
    Test.assertEquals(calcType(9, 5, 1.8), "division");
  });
});
