/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns 
 */
function isCoprime(x, y) {
  const [lowNum, highNum] = x < y ? [x, y] : [y, x];

  if(highNum % lowNum === 0 || highNum === lowNum) return false
  
  for(let i = 2; i <= Math.floor(highNum / 2); i++) {
    if(lowNum % i === 0 && highNum % i === 0) return false;
  }

  return true;
}

const chai = require("chai")
const assert = chai.assert

describe("Coprime numbers", function() {
  it("should test for coprimality", function() {
    assert.equal(isCoprime(20, 27), true, 'isCoprime(20, 27)')
    assert.equal(isCoprime(12, 39), false, 'isCoprime(12, 39)')
  })
})
