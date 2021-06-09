/**
 *
 * @param {number[]} a
 * @returns
 */
function distinct(a) {
  return Array.from(new Set(a));
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(distinct([1]), [1]);
    Test.assertDeepEquals(distinct([1, 2]), [1, 2]);
    Test.assertDeepEquals(distinct([1, 1, 2]), [1, 2]);
  });
});
