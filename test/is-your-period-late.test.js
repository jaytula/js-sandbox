/**
 * 
 * @param {Date} last 
 * @param {Date} today 
 * @param {number} cycleLength 
 * @returns 
 */
function periodIsLate(last, today, cycleLength) {
  const days = (today.getTime() - last.getTime()) / 1000 / 86400;

  return cycleLength < days;
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35),
      false
    );
    Test.assertEquals(
      periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28),
      true
    );
  });
});
