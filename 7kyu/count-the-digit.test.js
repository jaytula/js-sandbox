/**
 *
 * @param {number} n
 * @param {number} d
 */
function nbDig(n, d) {
  let count = 0;

  for (let i = 0; i <= n; i++) {
    count += (i ** 2).toString().split(d.toString()).length - 1;
  }

  return count;
}

describe("nbDig", function () {
  it("Basic tests", function () {
    expect(nbDig(5750, 0)).toBe(4700);
    expect(nbDig(11011, 2)).toBe(9481);
    expect(nbDig(12224, 8)).toBe(7733);
    expect(nbDig(11549, 1)).toBe(11905);
  });
});
