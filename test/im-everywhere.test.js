/**
 *
 * @param {string} word
 */
function i(word) {
  if (!word) return "Invalid word";
  if (word.match(/^[iI]/)) return "Invalid word";
  if (!word.match(/^[A-Z]/)) return "Invalid word";
  if (
    word
      .toLowerCase()
      .split("")
      .reduce((acc, curr) => acc + (curr.match(/[aeiou]/i) ? 1 : 0), 0) >=
    word.length / 2
  )
    return "Invalid word";
  return "i" + word;
}

const { assert } = require("chai");

describe("Basic tests", function () {
  it("Valid words", function () {
    assert.strictEqual(i("Phone"), "iPhone");
    assert.strictEqual(i("World"), "iWorld");
    assert.strictEqual(i("Human"), "iHuman");
    assert.strictEqual(i("Programmer"), "iProgrammer");
  });

  it("Invalid words", function () {
    assert.strictEqual(i(""), "Invalid word");
    assert.strictEqual(i("Inspire"), "Invalid word");
    assert.strictEqual(i("East"), "Invalid word");
    assert.strictEqual(i("Peace"), "Invalid word");
    assert.strictEqual(i("road"), "Invalid word");
  });
});
