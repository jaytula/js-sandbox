/**
 * 
 * @param {string} word 
 * @returns 
 */
function wordPattern(word) {
  word = word.toLowerCase();

  const result = []
  let count = 0;

  /**
   * @type {{[key: string]: number}}
   */
  const d = {}

  for(let letter of word) {
    if(!(letter in d)) {
      d[letter] = count;
      count++;
    }
    result.push(d[letter]).toString()
  }

  return result.join('.')
}

const chai = require("chai");
const assert = chai.assert;

describe("Example Tests", function() {
  it("should pass fixed tests", function() {
     assert.equal(wordPattern("hello"), "0.1.2.2.3");
    //  assert.equal(wordPattern("heLlo"), "0.1.2.2.3");
    //  assert.equal(wordPattern("helLo"), "0.1.2.2.3");
    //  assert.equal(wordPattern("Hippopotomonstrosesquippedaliophobia"), "0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13");
  });
});
