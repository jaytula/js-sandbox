/**
 *
 * @param {number[] | string} seq
 * @param {number} find
 * @param {number} replace
 * @returns
 */
function replaceAll(seq, find, replace) {
  return typeof seq === "string"
    ? seq
        .split("")
        .map(ch => (ch === find ? replace : ch))
        .join("")
    : seq.map(num => (num === find ? replace : num));
}

const { assert } = require("chai");

describe("Replace all items", function () {
  it("basic tests", function () {
    assert.deepEqual(replaceAll([], 1, 2), []);
    assert.deepEqual(replaceAll([1, 2, 2], 1, 2), [2, 2, 2]);
    assert.deepEqual(replaceAll("Hello World", "o", "0"), "Hell0 W0rld");
  });
});
