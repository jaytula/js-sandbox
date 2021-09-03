/**
 * 
 * @param {number[]} arr 
 */
function allNonConsecutive (arr) {
  const result = []
  for(let i = 0; i < arr.length; i++) {
    if(i===0) continue;
    if(arr[i] !== arr[i-1] + 1) {
      result.push({i, n: arr[i]})
    }
  }
  return result;
}

const Test = require('@codewars/test-compat')

it('a simple example', function() {
  const results = allNonConsecutive([1,2,3,4,6,7,8,10])
  Test.assertDeepEquals(results, [{i: 4, n:6}, {i: 7, n:10}])
})