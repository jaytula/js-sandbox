/**
 * 
 * @param {number[][]} matrix 
 * @returns 
 */
function sum(matrix) {
  let total = 0;
  for(let row = 0; row < matrix.length; row++) {
    total += matrix[row][row] + matrix[row][matrix.length-1-row]
  }
  return total;
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(sum([[1,2,3], [4,5,6], [7,8,9]]), 1 + 5 + 9 + 3 + 5 + 7);
  });
});
