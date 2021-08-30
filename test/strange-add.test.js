/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns 
 */
function add(num1, num2) {
  const s1 = num1.toString().split('')
  const s2 = num2.toString().split('')
  const maxLength = Math.max(s1.length, s2.length)
  
  let result = ''
  for(let i = 0; i < maxLength; i++) {
    const p1 = +s1.pop() || 0
    const p2 = +s2.pop() || 0
    result = (p1+p2).toString() + result
  }
  return +result;
}

const { assert } = require('chai');

describe("Silly addition", () => {
  it("Real addition", () => {
    assert.strictEqual(add(2, 11), 13);
    assert.strictEqual(add(0, 1), 1);
    assert.strictEqual(add(0, 0), 0);
  });
  
  it("Silly addition", () => {
    assert.strictEqual(add(16, 18), 214);
    assert.strictEqual(add(26, 39), 515);
    assert.strictEqual(add(122, 81), 1103);
  });
  
  it("Big addition", () => {
    assert.strictEqual(add(1222, 30277), 31499);
    assert.strictEqual(add(1236, 30977), 31111013);
    assert.strictEqual(add(38810, 1383), 391193);
    assert.strictEqual(add(49999, 49999), 818181818);
  });
});
