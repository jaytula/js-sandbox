/**
 * 
 * @param {number} k 
 * @param {number[]} elements 
 */
function splitByValue(k, elements){
  const before = []
  const after = []

  elements.forEach(el => {
    if(el < k) {
      before.push(el);
    } else {
      after.push(el);
    }
  })

  return before.concat(after)
}

const Test = require('@codewars/test-compat')

describe("Simple Test Case", function() {
  it("case", function() {
    Test.assertDeepEquals(splitByValue(5,[1, 3, 5, 7, 6, 4, 2]), [1, 3, 4, 2, 5, 7, 6]);
    Test.assertDeepEquals(splitByValue(0, [5, 2, 7, 3, 2]),[5, 2, 7, 3, 2]);
    Test.assertDeepEquals(splitByValue(6, [6, 4, 10, 10, 6]),[4, 6, 10, 10, 6]);

  });
});
