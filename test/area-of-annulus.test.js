/**
 *
 * @param {number} a
 */
function annulusArea(a) {
  return +((a / 2) ** 2 * Math.PI).toFixed(2);
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(annulusArea(7), 38.48);
    Test.assertEquals(annulusArea(13), 132.73);
  });
});
