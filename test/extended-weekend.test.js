/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function solve(a, b) {
  let total = 0;
  let startMonth = '';
  let endMonth = '';

  const monthShorts = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  for(let year = a; year <= b; year++) {
    for(let month of [0, 2, 4, 6, 7, 9, 11]) {
      const dt = new Date(year, month, 1)
      if(dt.getDay() === 5) {
        if(!startMonth) startMonth = monthShorts[month]
        endMonth = monthShorts[month]
        total++;
      }
    }
  }

  return [startMonth, endMonth, total]
}

const Test = require("@codewars/test-compat");

it("Basic tests", function () {
  Test.assertDeepEquals(solve(2016, 2020), ["Jan", "May", 5]);
  Test.assertDeepEquals(solve(1900, 1950), ["Mar", "Dec", 51]);
  Test.assertDeepEquals(solve(1800, 2500), ["Aug", "Oct", 702]);
});
