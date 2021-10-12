/**
 * 
 * @param {string} str 
 * @param {string} sep 
 */
function freqSeq(str, sep) {
  /**
   * @type {{[key: string]: number}}
   */
  const d = {}
  for(let ch of str) {
    if(!(ch in d)) d[ch] = 0;
    d[ch]++
  }

  return str.split('').map(ch => d[ch].toString()).join(sep)
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(freqSeq("hello world", "-"), "1-1-3-3-2-1-1-2-1-3-1");
    Test.assertEquals(freqSeq("19999999", ":"), "1:7:7:7:7:7:7:7");
    Test.assertEquals(freqSeq("^^^**$", "x"), "3x3x3x2x2x1");
  });
});
