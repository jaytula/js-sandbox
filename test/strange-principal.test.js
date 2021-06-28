function numOfOpenLockers(n) {
  if (n <= 1) return n;

  const lockers = new Array(n).fill(true);

  for (let i = 2; i <= n; i++) {
    for (let j = i; j <= n; j += i) {
      const idx = j - 1;
      lockers[idx] = !lockers[idx];
    }
  }

  return lockers.reduce((acc, curr) => acc + (curr ? 1 : 0), 0);
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(numOfOpenLockers(4521), 67);
    Test.assertDeepEquals(numOfOpenLockers(203), 14);
  });
});
