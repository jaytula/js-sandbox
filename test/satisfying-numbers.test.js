function gcd(a, b) {
  if(b===0) return a;
  return gcd(b, a % b);
}

function lcm(a, b) {
  return a * b / gcd(a, b);
}

/**
 *
 * @param {number} n
 */
function smallest(n) {
  let result = 1;
  for(let i = 1; i <= n; i++) {
    result  = lcm(result, i);
  }
  return result;
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.expect(smallest(1) === 1, "Sorry, try again.");
    Test.expect(smallest(2) === 2, "Sorry, try again.");
    Test.expect(smallest(3) === 6, "Sorry, try again.");
    Test.expect(smallest(4) === 12, "Sorry, try again.");
    Test.expect(smallest(5) === 60, "Sorry, try again.");
    Test.assertEquals(smallest(6), 60);
    Test.expect(smallest(7) === 420, "Sorry, try again.");
    Test.expect(smallest(8) === 840, "Sorry, try again.");
    Test.expect(smallest(9) === 2520, "Sorry, try again.");
    Test.expect(smallest(10) === 2520, "Sorry, try again.");
  });
});
