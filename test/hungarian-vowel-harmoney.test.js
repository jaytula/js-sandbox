/**
 * 
 * @param {string} word 
 * @returns 
 */
function dative(word) {
  const frontVowels = ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű']
  const backVowels = ['a', 'á', 'o', 'ó', 'u', 'ú']

  const rgx = RegExp(`[^${frontVowels.join('')}${backVowels.join('')}]`, 'g')
  const justVowels = word.replace(rgx, '');
  const lastVowel = justVowels[justVowels.length - 1]

  return word + (frontVowels.includes(lastVowel) ? 'nek' : 'nak')
}

const Test = require('@codewars/test-compat')
var tests = [
  // [input, expected]
  ["ablak", "ablaknak"],
  ["tükör", "tükörnek"],
  ["keret", "keretnek"],
  ["otthon", "otthonnak"],
  ["virág", "virágnak"],
  ["tett", "tettnek"],
  ["rokkant", "rokkantnak"],
  ["rossz", "rossznak"],
  ["gonosz", "gonosznak"],
];

describe("Example Tests", function(){
it("should work for example tests", function() {
  for (var i = 0, l = tests.length; i < l; i++) {
      var input = tests[i][0];
      var expected = tests[i][1];
      console.log(input + " -> " + expected);
      Test.assertEquals(dative(input), expected);
  }
});
});