/**
 * 
 * @param {number} m 
 * @param {number} n 
 */
function generatePairs(m, n) {
  const result = []
  for(let i = m; i <= n; i++) {
    for(let j = i; j <= n; j++) {
      result.push([i, j])
    }
  }

  return result
}

const Test = require('@codewars/test-compat')

describe("Tests", () => {
  it("test", () => {
Test.assertDeepEquals(generatePairs(2, 4), [ [2, 2], [2, 3], [2, 4], [3, 3], [3, 4], [4, 4] ]);
  });
});
