/**
 * 
 * @param {string} str 
 */
function isIsogram(str) {
  const memory = [];
  for(let letter of str.toLowerCase()) {
    if(memory.indexOf(letter) !== -1) return false
    memory.push(letter);
  }
  return true;
}

const Test = require("@codewars/test-compat");
const assert = require('assert');

describe("Tests", () => {
  it("test", () => {
    assert.deepStrictEqual(isIsogram("Dermatoglyphics"), true);
    assert.deepStrictEqual(isIsogram("isogram"), true);
    assert.deepStrictEqual(
      isIsogram("aba"),
      false,
      "same chars may not be adjacent"
    );
    assert.deepStrictEqual(
      isIsogram("moOse"),
      false,
      "same chars may not be same case"
    );
    assert.deepStrictEqual(isIsogram("isIsogram"), false);
    assert.deepStrictEqual(
      isIsogram(""),
      true,
      "an empty string is a valid isogram"
    );
  });
});
