/**
 * 
 * @param  {...string[]} letters 
 * @returns 
 */
function addLetters(...letters) {
  const values = letters.map(letter => letter.charCodeAt(0) - 96)
  const sum = values.reduce((acc, curr) => acc + curr, 0)
  return sum===0 ? 'z' : String.fromCharCode(96+(sum-1)%26 + 1)
}

const { assert } = require('chai');

describe("Fixed tests", () => {
  const tests = [
    [['a', 'b', 'c'], 'f'],
    [['z'], 'z'],
    [['a', 'b'], 'c'],
    [['c'], 'c'],
    [['z', 'a'], 'a'],
    [['y', 'c', 'b'], 'd'],
    [[], 'z']
  ];
  tests.forEach(test => {
    const str = test[0].map(x => `"${x}"`).join(', ');
    it(`addLetters(${str})`, () => {
      assert.strictEqual(addLetters(...test[0]), test[1]);
    });
  });
});