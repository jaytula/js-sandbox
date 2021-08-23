/**
 * 
 * @param {number} n 
 */
const kochCurve = (n) => {
  if(n === 0) return []
  const curve = [60, -120, 60];
  const result = curve.slice()

  while(n > 1) {
    for(let i = result.length; i >= 0; i--) {
      result.splice(i, 0, ...curve)
    }
    n--;
  }

  return result;
}

const Test = require('@codewars/test-compat')

describe("Basic Tests", function(){
  it("It should works for basic tests.", function(){
    Test.assertDeepEquals(kochCurve(0), []);
    Test.assertDeepEquals(kochCurve(1), [60, -120, 60]);
    Test.assertDeepEquals(kochCurve(2), [60, -120, 60, 60, 60, -120, 60, -120, 60, -120, 60, 60, 60, -120, 60]);
  })})