/**
 *
 * @param {string} s
 */
function shifter(s) {
  return s
    .split(" ")
    .reduce(
      (acc, word) =>
        acc.concat(
          word.match(/^[HINOMSXZW]+$/g) && !acc.includes(word) ? word : []
        ),
      []
    ).length;
}

const { assert } = require("chai");
describe("Example tests", () => {
  it(`Testing for string "ON"`, () => {
    assert.equal(shifter("ON"), 1, "Wrong result. It should be 1");
  });
  it(`Testing for string "OS IS UPDATED"`, () => {
    assert.equal(shifter("OS IS UPDATED"), 2, "Wrong result. It should be 2");
  });
  it(`Testing for string "WHO IS WHO"`, () => {
    assert.equal(shifter("WHO IS WHO"), 2, "Wrong result. It should be 2");
  });
  it(`Testing for string "JS"`, () => {
    assert.equal(shifter("JS"), 0, "Wrong result. It should be 0");
  });
  it(`Testing for string "I III I III"`, () => {
    assert.equal(shifter("I III I III"), 2, "Wrong result. It should be 2");
  });
  it(`Testing for empty string ""`, () => {
    assert.equal(shifter(""), 0, "Wrong result. It should be 0");
  });
});
