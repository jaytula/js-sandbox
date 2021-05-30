/**
 *
 * @param {number} n
 */
function notVisibleCubes(n) {
  if (n <= 2) return 0;
  return (n - 2) ** 3;
}

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    expect(notVisibleCubes(0)).toBe(0);
    expect(notVisibleCubes(1)).toBe(0);
    expect(notVisibleCubes(2)).toBe(0);
    expect(notVisibleCubes(3)).toBe(1);
    expect(notVisibleCubes(5)).toBe(27);
  });
});
