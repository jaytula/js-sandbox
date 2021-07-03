/**
 *
 * @param {number} content
 * @param {number} evap_per_day
 * @param {number} threshold
 * @returns
 */
function evaporator(content, evap_per_day, threshold) {
  return Math.ceil(
    Math.log10(threshold / 100) / Math.log10(1 - evap_per_day / 100)
  );
}

const Test = require("@codewars/test-compat");

describe("Deodorant Evaporator", () => {
  it("test", () => {
    Test.assertEquals(evaporator(10, 10, 10), 22);
  });
});
