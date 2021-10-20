/**
 * 
 * @param {string[]} words 
 * @returns 
 */
function nthChar(words){
  return words.map((word, idx) => word[idx]).join('')
 }

 const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(nthChar([]),'');
    assert.strictEqual(nthChar(['yoda', 'best', 'has']), 'yes');
    })
  })
