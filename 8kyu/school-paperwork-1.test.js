/**
 * 
 * @param {number} n 
 * @param {number} m 
 */
function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}

describe("Tests", () => {
  it("test", () => {
    expect(paperwork(5, 5)).toBe(25);
  });
});
