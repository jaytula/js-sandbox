function halvingSum(n) {
  let total = 0;
  while(n > 0) {
    total += n;
    n = Math.floor(n / 2);
  }
  return total;
}

const Test = require('@codewars/test-compat');

describe("Halving Sum", function() {
  it("Test", function() {
    Test.assertEquals(halvingSum(25),47);
    Test.assertEquals(halvingSum(127),247);
  });
});