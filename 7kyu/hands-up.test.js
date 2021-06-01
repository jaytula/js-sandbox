/**
 *
 * @param {number} s
 * @returns
 */
const getPositions = (s) => {
  return [s % 3, Math.floor(s / 3) % 3, Math.floor(s / 9) % 3];
};

describe("Solution", function () {
  it("Sample Tests", function () {
    expect(getPositions(54)).toEqual([0, 0, 0]);
    expect(getPositions(98)).toEqual([2, 2, 1]);
    expect(getPositions(3)).toEqual([0, 1, 0]);
  });
});
