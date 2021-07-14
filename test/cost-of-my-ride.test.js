/**
 *
 * @param {number} age
 * @param {string} size
 * @param {number} numofdays
 */
function insurance(age, size, numofdays) {
  if (numofdays < 0) return 0;
  const surcharge = { economy: 0, medium: 10, "full-size": 15 };
  return (
    (50 + (size in surcharge ? surcharge[size] : 15) + (age < 25 ? 10 : 0)) *
    numofdays
  );
}

const Test = require("@codewars/test-compat");

describe("Cost of my ride", () => {
  it("test", () => {
    Test.assertEquals(insurance(18, "medium", 7), 490);
    Test.assertEquals(insurance(30, "full-size", 30), 1950);

    Test.assertEquals(insurance(21, "economy", -10), 0);
    Test.assertEquals(insurance(42, "my custom car", 7), 455);
  });
});
