/**
 * 
 * @param {number[]} stations 
 * @returns 
 */
function riders(stations) {
  let riders = 1
  let traveled = 0;

  for(let distance of stations) {
    if(traveled + distance > 100) {
      riders++;
      traveled = 0;
    }
    traveled += distance;
  }
  return riders;
}

const Test = require('@codewars/test-compat')

describe("Sample Tests", function() {

  it("ex", function() {
    Test.assertEquals(riders([18, 15]), 1);
    Test.assertEquals(riders([43, 23, 40, 13]), 2);
    Test.assertEquals(riders([33, 8, 16, 47, 30, 30, 46]), 3);
    Test.assertEquals(riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49]), 4);
  });
  
});