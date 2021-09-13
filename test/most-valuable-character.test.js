/**
 * 
 * @param {string} st 
 */
function solve(st) {
  /**
   * @type {{[key: string]: number}}
   */
  const d = {}

  st.split('').forEach(ch => {
    d[ch] = st.lastIndexOf(ch) - st.indexOf(ch);
  })

  const items = Object.entries(d).sort(([ch1, value1], [ch2, value2]) => {
    return value1 === value2 ? ch2.charCodeAt(0) - ch1.charCodeAt(0) : value1 - value2;
  })

  return items.pop()[0]
}

const chai = require("chai");
const assert = chai.assert;

describe("Example cases", function() {
  it("basic tests", function() {
    assert.strictEqual(solve('a'), 'a');
    assert.strictEqual(solve('aa'), 'a');
    assert.strictEqual(solve('bcd'), 'b');
    assert.strictEqual(solve('axyzxyz'), 'x');
    assert.strictEqual(solve('aabccc'), 'c'); 
  });
});