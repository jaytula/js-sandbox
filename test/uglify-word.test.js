/**
 * 
 * @param {string} s 
 */
function uglifyWord(s) {
  let flag = true;
  return s.replace(/./g, ch => {
    const m = ch.match(/[a-zA-Z]/)
    if(m) {
      const result = flag ? ch.toUpperCase() : ch.toLowerCase()
      flag = !flag;
      return result;
    }
    flag = 1;
    return ch;
  })
}

const assert = require("chai").assert;

describe("Uglify Word", function() {
  it("should pass sample tests", function() {
    assert.strictEqual(uglifyWord("AAA"), "AaA");
    assert.strictEqual(uglifyWord("AaA"), "AaA");
    assert.strictEqual(uglifyWord("BbB"), "BbB");
    assert.strictEqual(uglifyWord("aaa-bbb-ccc"), "AaA-BbB-CcC");
    assert.strictEqual(uglifyWord("AaA-BbB-CcC"), "AaA-BbB-CcC");
    assert.strictEqual(uglifyWord("eeee-ffff-gggg"), "EeEe-FfFf-GgGg");
    assert.strictEqual(uglifyWord("EeEe-FfFf-GgGg"), "EeEe-FfFf-GgGg");
    assert.strictEqual(uglifyWord("qwe123asdf456zxc"), "QwE123AsDf456ZxC");
    assert.strictEqual(uglifyWord("Hello World"), "HeLlO WoRlD");
  });
});