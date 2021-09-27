/**
 *
 * @param {string} str
 */
function connotation(str) {
  return (
    str
      .split(/\s+/)
      .filter(w => w.length)
      .map((w) => (w[0].match(/[a-m]/i) ? 1 : -1))
      .reduce((acc, num) => acc + num, 0) >= 0
  );
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Test", () => {
  it("True", () => {
    assert.strictEqual(connotation("A big brown fox caught a bad bunny"), true);
  });
  it("False", () => {
    assert.strictEqual(connotation("Xylophones can obtain Xenon."), false);
  });
  it("All caps", () => {
    assert.strictEqual(connotation("CHOCOLATE MAKES A GREAT SNACK"), true);
  });
  it("Random case", () => {
    assert.strictEqual(connotation("All FOoD tAsTEs NIcE for someONe"), true);
  });
  it("Random number of spaces", () => {
    assert.strictEqual(connotation("Is  this the  best  Kata?"), true);
  });
});
