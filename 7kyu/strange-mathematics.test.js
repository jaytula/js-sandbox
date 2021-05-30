/**
 *
 * @param {number} n
 * @param {number} k
 */
function strangeMath(n, k) {
  return (
    Array(n)
      .fill(0)
      .map((_, idx) => (idx + 1).toString())
      .sort()
      .indexOf(k.toString()) + 1
  );
}

describe("Fixed tests", () => {
  test(`Testing for (11, 2)`, () => {
    expect(strangeMath(11, 2)).toBe(4);
  });
  it(`Testing for (15, 5)`, () => {
    expect(strangeMath(15, 5)).toBe(11);
  });
  it(`Testing for (15, 15)`, () => {
    expect(strangeMath(15, 15)).toBe(7);
  });
});
