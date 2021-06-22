/**
 * 
 * @param {*} n 
 */
function getDivisorsCnt(n) {
  let count = 0;

  for(let i = 1; i <= n; i++) {
    if(n % i === 0) count++;
  }

  return count;
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(getDivisorsCnt(1), 1);
    Test.assertEquals(getDivisorsCnt(10), 4);
    Test.assertEquals(getDivisorsCnt(11), 2);
    Test.assertEquals(getDivisorsCnt(54), 8);
  });
});
