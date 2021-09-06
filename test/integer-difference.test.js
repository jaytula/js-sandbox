/**
 * 
 * @param {number[]} arr 
 * @param {number} n 
 */
const intDiff = (arr, n) => {
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(i === j) continue;
      if(Math.abs(arr[i] -arr[j]) === n) count++;
    }
  }
  return count / 2;
}

const Test = require('@codewars/test-compat')

describe("Solution", function(){
  it("should work for basic tests", function(){
    Test.assertEquals(intDiff([1, 1, 5, 6, 9, 16, 27], 4), 3);
    Test.assertEquals(intDiff([1, 1, 3, 3], 2), 4);
  });
});