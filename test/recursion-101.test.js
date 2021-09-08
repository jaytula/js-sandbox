/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function solve(a,b){
  if( a===0 || b === 0) return [a, b];
  if( a >= 2 * b) { 
    a = a - 2*b
    return solve(a, b);
  }
  if(b >= 2*a) {
    b = b - 2 * a;
    return solve(a, b)
  }
  return [a, b]
}

const Test = require('@codewars/test-compat')

it("Basic tests", function(){
  Test.assertDeepEquals(solve(6,19),[6,7]);
  Test.assertDeepEquals(solve(2,1),[0,1]);
  Test.assertDeepEquals(solve(22,5),[0,1]);
  Test.assertDeepEquals(solve(2,10),[2,2]);
  });