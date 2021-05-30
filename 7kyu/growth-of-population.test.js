/**
 *
 * @param {number} p0
 * @param {number} percent
 * @param {number} aug
 * @param {number} p
 */
function nbYear(p0, percent, aug, p) {
  let numYears = 0;
  let currentPopulation = p0;
  while (currentPopulation < p) {
    currentPopulation += Math.round((currentPopulation * percent) / 100) + aug;
    numYears++;
  }
  return numYears;
}

describe("nbYear", function () {
  it("Basic tests", function () {
    expect(nbYear(1500, 5, 100, 5000)).toBe(15);
    expect(nbYear(1500000, 2.5, 10000, 2000000)).toBe(10);
    expect(nbYear(1500000, 0.25, 1000, 2000000)).toBe(94);
  });
});
