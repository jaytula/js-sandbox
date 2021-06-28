/**
 * 
 * @param {number} n 
 * @returns 
 */
function numOfOpenLockers(n) {
  if (n <= 1) return n;
  return Math.floor(Math.sqrt(n))
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(numOfOpenLockers(4521), 67);
    Test.assertDeepEquals(numOfOpenLockers(203), 14);
  });
});
