/**
 * 
 * @param {string} s 
 */
function removeChars(s) {
  return s.replace(/[^a-z ]/ig, '');
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Fixed Tests", () => {
  it("Tests", () => {
    assert.strictEqual(removeChars(".tree1"),'tree')
    assert.strictEqual(removeChars("that's a pie&ce o_f p#ie!"),'thats a piece of pie')
    assert.strictEqual(removeChars('john.dope@dopington.com'), 'johndopedopingtoncom')
    assert.strictEqual(removeChars('my_list = ["a","b","c"]'), 'mylist  abc')
    assert.strictEqual(removeChars('1 + 1 = 2'), '    ')
    assert.strictEqual(removeChars("0123456789(.)+,|[]{}=@/~;^$'<>?-!*&:#%_"), '')
    assert.strictEqual(removeChars("test for error!"),"test for error")
    assert.strictEqual(removeChars('co_ol f0un%(c)t-io"n'),"cool function")
  })
})