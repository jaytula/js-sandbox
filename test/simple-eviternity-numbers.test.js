/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function solve(a,b){
  let count = 0;

  for(let i = a; i < b; i++) {
    const s = i.toString()
    if(s.match(/^[358]+$/)) {
      const threes = s.replace(/[^3]/g, '').length;
      const fives = s.replace(/[^5]/g, '').length;
      const eights = s.replace(/[^8]/g, '').length;

      if(eights >= fives && fives >= threes) count++
    }
  }

  return count;
}

const Test = require('@codewars/test-compat')

it("Basic tests", function(){
  Test.assertEquals(solve(0,100),4);
  Test.assertEquals(solve(0,1000),14);
  Test.assertEquals(solve(0,10000),37);
  Test.assertEquals(solve(0,100000),103);
  Test.assertEquals(solve(0,500000),148);
  });