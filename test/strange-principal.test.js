/**
 * 
 * @param {number} n 
 * @returns 
 */
function numOfOpenLockers(n) {
  if (n <= 1) return n;
  let total = 1;
  for (let i = 2; i <= n; i++) {
    let open = false;
    for (let j = i; j <= Math.sqrt(n); j += i) {
      if(i % j === 0) open = !open;
    }
    total += +open;
  }

  return total;
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(numOfOpenLockers(4521), 67);
    Test.assertDeepEquals(numOfOpenLockers(203), 14);
  });
});
