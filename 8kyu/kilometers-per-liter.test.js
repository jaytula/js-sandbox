/**
 *
 * @param {number} mpg
 * @returns
 */
function converter(mpg) {
  return Math.round(((mpg * 1.609344) / 4.54609188) * 100) / 100;
}

describe("Tests", () => {
  it("test", () => {
    expect(converter(10)).toBe(3.54);
    expect(converter(20)).toBe(7.08);
    expect(converter(30)).toBe(10.62);
  });
});
