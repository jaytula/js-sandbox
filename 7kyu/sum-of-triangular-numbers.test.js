/**
 * 
 * @param {number} n 
 */
function sumTriangularNumbers(n) {
  if(n <= 0) return 0
  let counter = 0
  let total = 0
  for(let i = 1; i <= n; i++) {
    counter += i
    total += counter;
  }

  return total;
}

describe("Tests", () => {
  it("test", () => {
    expect(sumTriangularNumbers(6)).toBe(56);
    expect(sumTriangularNumbers(34)).toBe(7140);
    expect(sumTriangularNumbers(-291)).toBe(0);
    expect(sumTriangularNumbers(943)).toBe(140205240);
    expect(sumTriangularNumbers(-971)).toBe(0);
  });
});
