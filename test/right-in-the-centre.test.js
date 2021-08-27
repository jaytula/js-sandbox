/**
 *
 * @param {string} seq
 */
function isInMiddle(seq) {
  const isOdd = seq.length % 2 === 1;
  const lengthToCut = Math.floor((seq.length - 3) / 2);

  return isOdd
    ? seq.slice(lengthToCut, lengthToCut + 3) === "abc"
    : seq.slice(lengthToCut, lengthToCut + 3) === "abc" ||
        seq.slice(lengthToCut + 1, lengthToCut + 4) === "abc";
}

const chai = require("chai");
const assert = chai.assert;

describe("isInMiddle", function () {
  it("should test the examples", function () {
    assert.equal(isInMiddle("AAabcBB"), true);
    assert.equal(isInMiddle("AabcBB"), true);
    assert.equal(isInMiddle("AabcBBB"), false);
  });
});
