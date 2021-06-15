/**
 *
 * @param {number} litres
 * @param {number} pricePerLitre
 */
function fuelPrice(litres, pricePerLitre) {
  const pricePerLitreAdjusted =
    pricePerLitre - Math.min(Math.floor(litres / 2) * 0.05, 0.25);
  return +(litres * pricePerLitreAdjusted).toFixed(2);
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(fuelPrice(5, 1.23), 5.65);
    Test.assertEquals(fuelPrice(8, 2.5), 18.4);
    Test.assertEquals(fuelPrice(5, 5.6), 27.5);
  });
});
