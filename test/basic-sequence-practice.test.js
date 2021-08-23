/**
 * 
 * @param {number} n 
 */
function sumOfN(n) {
  const result = [0]
  if(n === 0) return result

  const multipler = n < 0 ? -1 : 1;
  let counter = 1;
  n = Math.abs(n)
  while(n >= 1) {
    result.push(result[result.length-1]+multipler*counter)
    counter++;
    n--;
  }

  return result
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(sumOfN(3), [0, 1, 3, 6]);
    Test.assertDeepEquals(sumOfN(-4), [0, -1, -3, -6, -10]);
    Test.assertDeepEquals(sumOfN(1), [0, 1]);
    Test.assertDeepEquals(sumOfN(-6), [0, -1, -3, -6, -10, -15, -21]);
  });
});
