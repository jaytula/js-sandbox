/**
 *
 * @param {number} n
 */
function perfectRoots(n) {
  return [2, 4, 8].every((r) => Math.pow(n, 1 / r) % 1 === 0);
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(perfectRoots(256), true);
    Test.assertEquals(perfectRoots(1000), false);
    Test.assertEquals(perfectRoots(6561), true);
  });
});
