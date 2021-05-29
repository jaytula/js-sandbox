/**
 * 
 * @param {number} distanceToPump 
 * @param {number} mpg 
 * @param {number} fuelLeft 
 */
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump
};

test("Sample Tests", function() {
  expect(zeroFuel(50, 25, 2)).toBe(true);
  expect(zeroFuel(100, 50, 1)).toBe(false);
});