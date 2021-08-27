/**
 * 
 * @param {number[]} data 
 */
function mirror(data) {
  const sortedData = data.slice().sort((a, b) => a - b);
  const reverseSortedData = sortedData.slice().reverse();

  return sortedData.concat(reverseSortedData.slice(1))
}

var assert = require('assert');

const fixed_tests = [
  {input: [], expected: []},
  {input: [1], expected: [1]},
  {input: [2, 1], expected: [1, 2, 1]},
  {input: [2, 3, 1], expected: [1, 2, 3, 2, 1]},
  {input: [-8, 42, 18, 0, -16], expected: [-16, -8, 0, 18, 42, 18, 0, -8, -16]},
]


describe("Test suite", function() {
  it("Fixed tests", function() {
    for (const testCase of fixed_tests) {
      const { input, expected } = testCase;
      assert.deepEqual(mirror(input), expected); 
    };
  });
});
