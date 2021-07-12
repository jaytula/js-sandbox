/**
 * 
 * @param {string} word 
 */
function passTheDoorMan (word){
  let doubledLetter = '';
  for(let i = 1; i < word.length; i++) {
    if(word[i-1] === word[i]) { doubledLetter = word[i]; break;}
  }
  return (doubledLetter.charCodeAt(0) - 96) * 3
}

const Test = require('@codewars/test-compat')

describe("Club Doorman", function(){
  it("Basic Tests", function(){
   Test.assertDeepEquals( passTheDoorMan("lettuce") , 60);
   Test.assertDeepEquals( passTheDoorMan("hill"), 36);
   Test.assertDeepEquals( passTheDoorMan("apple"), 48);
 });
});   