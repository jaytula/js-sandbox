/**
 *
 * @param {string} numbers
 */
function highAndLow(numbers) {
  const integers = numbers.split(" ").map(Number);

  return Math.max(...integers) + " " + Math.min(...integers);
}

describe("Tests", () => {
  it("test", () => {
    expect(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")).toBe("542 -214");
  });
});
