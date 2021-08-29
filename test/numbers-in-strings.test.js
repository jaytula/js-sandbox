/**
 * 
 * @param {string} s 
 */
function solve(s){
  return Math.max.apply(null, s.match(/\d+/g).map(Number))
};

const Test = require('@codewars/test-compat')

it("Basic tests", function(){
  Test.assertEquals(solve('gh12cdy695m1'),695);
  Test.assertEquals(solve('2ti9iei7qhr5'),9);
  Test.assertEquals(solve('vih61w8oohj5'),61);
  Test.assertEquals(solve('f7g42g16hcu5'),42);
  Test.assertEquals(solve('lu1j8qbbb85'),85);
  });