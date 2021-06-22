/**
 * 
 * @param {number} n 
 * @param {number} divisor 
 * @returns 
 */
const divisions = (n, divisor) => {
  let times = 0;
  
  while(n >= divisor) {
    n = Math.floor(n / divisor);
    times++;
  }

  return times;
};

const Test = require("@codewars/test-compat");

describe("Your solution", function () {
  test("should work for example tests", function () {
    Test.assertEquals(divisions(6, 2), 2);
    Test.assertEquals(divisions(100, 2), 6);
    Test.assertEquals(divisions(2450, 5), 4);
    Test.assertEquals(divisions(9999, 3), 8);
    Test.assertEquals(divisions(2, 3), 0);
    Test.assertEquals(divisions(5, 5), 1);
  });
});
