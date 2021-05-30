/**
 * 
 * @param {number} sq 
 * @returns 
 */
function findNextSquare(sq) {
  const root = Math.floor(Math.sqrt(sq));
  return (root**2 !== sq) ? -1 : (root+1)**2
}

describe("findNextSquare", function () {
  test("should return the next square for perfect squares", function () {
    expect(findNextSquare(121)).toBe(144);
    expect(findNextSquare(625)).toBe(676);
    expect(findNextSquare(319225)).toBe(320356);
    expect(findNextSquare(15241383936)).toBe(15241630849);
  });

  test("should return -1 for numbers which aren't perfect squares", function () {
    expect(findNextSquare(155)).toBe(-1);
    expect(findNextSquare(342786627)).toBe(-1);
  });
});
