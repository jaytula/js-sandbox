/**
 *
 * @param {number} x
 * @param {number} y
 */
function mygcd(x, y) {
  let maxDivisor = x < y ? x : y;
  let counter = 2;
  let gcd = 1;

  while (counter <= maxDivisor) {
    while (x % counter === 0 && y % counter === 0) {
      x /= counter;
      y /= counter;
      maxDivisor /= counter;
      gcd *= counter;
    }
    counter++;
  }
  return gcd;
}

describe("Tests", () => {
  test("test", () => {
    expect(mygcd(30, 12)).toBe(6);
    expect(mygcd(8, 9)).toBe(1);
    expect(mygcd(1, 1)).toBe(1);
  });
  test("additional", () => {
    expect(mygcd(60, 12)).toBe(12);
    expect(mygcd(10927782, 6902514)).toBe(846);
    expect(mygcd(1590771464, 1590771620)).toBe(4);
  });
});
