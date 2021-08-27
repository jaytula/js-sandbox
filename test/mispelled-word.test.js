/**
 * 
 * @param {string} word1 
 * @param {string} word2 
 */
var mispelled = function(word1, word2)
{
  if(word1 === word2) return true;

  const [shorter, longer] = [word1, word2].sort((a, b) => a.length - b.length)

  if(longer.length - shorter.length === 1 && longer.includes(shorter)) return true;

  if(longer.length !== shorter.length) return false;

  let diffCount = 0

  for(let i = 0; i < shorter.length; i++) {
    if(shorter[i] !== longer[i]) diffCount++
    if(diffCount === 2) return false
  }

  return true;
}

const Test = require('@codewars/test-compat')

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(mispelled('versed', 'xersed'), true);
Test.assertEquals(mispelled('versed', 'applb'), false);

Test.assertEquals(mispelled('versed', 'v5rsed'), true);
Test.assertEquals(mispelled('1versed', 'versed'), true);
Test.assertEquals(mispelled('versed', 'versed1'), true);

Test.assertEquals(mispelled('versed', 'aversed'), true);
Test.assertEquals(mispelled('aaversed', 'versed'), false);
Test.assertEquals(mispelled('versed', 'aaversed'), false);

  });
});
