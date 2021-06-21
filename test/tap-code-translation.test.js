const CODE = {
  a: [1, 1], b: [1, 2], c: [1, 3], k: [1, 3], d: [1, 4], e: [1, 5],
  f: [2, 1], g: [2, 2], h: [2, 3], i: [2, 4], j: [2, 5],
  l: [3, 1], m: [3, 2], n: [3, 3], o: [3, 4], p: [3, 5],
  q: [4, 1], r: [4, 2], s: [4, 3], t: [4, 4], u: [4, 5],
  v: [5, 1], w: [5, 2], x: [5, 3], y: [5, 4], z: [5, 5],
}

/**
 * 
 * @param {string} text 
 * @returns 
 */
function tapCodeTranslation(text) {
  return text.split('').map(ch => '.'.repeat(CODE[ch][0]) + ' ' + '.'.repeat(CODE[ch][1])).join(' ');
}

const chai = require("chai");
const assert = chai.assert;

describe("Tests", () => {
  it("Fixed tests", () => {
    assert.equal(tapCodeTranslation("test"), ".... .... . ..... .... ... .... ....", `Text: "test"`);
    assert.equal(tapCodeTranslation("total"), ".... .... ... .... .... .... . . ... .", `Text: "total"`);
    assert.equal(tapCodeTranslation("break"), ". .. .... .. . ..... . . . ...", `Text: "break"`);
    assert.equal(tapCodeTranslation("something"), ".... ... ... .... ... .. . ..... .... .... .. ... .. .... ... ... .. ..", `Text: "something"`);
    assert.equal(tapCodeTranslation("final"), ".. . .. .... ... ... . . ... .", `Text: "final"`);
  });
});
