/**
 * 
 * @param {string[]} words 
 * @returns 
 */
function wordsToSentence(words) {
  return words.join(' ')
}

const Test = require('@codewars/test-compat')

describe("Solution", function(){
  it("Basic tests", function(){
    Test.assertEquals(wordsToSentence(["hello", "world"]), "hello world");
  });
});