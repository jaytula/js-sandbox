/**
 * 
 * @param {number} n 
 */
function reverse(n){
  let result = 0;
  result += n % 10
  n = parseInt(n / 10)
  while(n > 0) {
    result *= 10
    result += n % 10
    n = parseInt(n / 10)
  }

  return result;
}

const Test = require('@codewars/test-compat')

it("Basic tests",() =>{
  Test.assertEquals(reverse(1234), 4321);
  Test.assertEquals(reverse(10987), 78901);
  Test.assertEquals(reverse(1020), 201);
});