/**
 * 
 * @param {number} n 
 */
function skiponacci(n) {
  const result = []
  for(let i = 1; i <= n; i++) {
    if(i === 1 || i === 2) result.push(1);
    else result.push(result[result.length-2] + result[result.length-1])
  }

  return result.map((el, idx) => idx % 2 === 0 ? el : 'skip').join(' ')
}

const chai = require('chai')
const assert = chai.assert;

describe("Sample Tests", function() {
  it("Tests", function() {
    assert.equal(skiponacci(1), "1");
    assert.equal(skiponacci(5), "1 skip 2 skip 5");
    assert.equal(skiponacci(7), "1 skip 2 skip 5 skip 13");
  });
});