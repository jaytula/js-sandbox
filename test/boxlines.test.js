/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 */
function f(x,y,z){
  return (4 + x * 8) + (y-1) * (5 * x + 3) + (z-1) * ((x+1)*(y+1) + x + y + 2 * x * y)
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example test", function() {
  it("1*1*1", function() {
    assert.strictEqual(f(1,1,1), 12);
  });
  it("2*1*1", function() {
    assert.strictEqual(f(2,1,1), 20);
  });
  it("3*1*1", function() {
    assert.strictEqual(f(3,1,1), 28);
  });
  it("4*1*1", function() {
    assert.strictEqual(f(4,1,1), 36);
  });

  it("2*2*1", function() {
    assert.strictEqual(f(2,2,1), 33);
  });

  it("3*2*1", function() {
    assert.strictEqual(f(3,2,1), 46);
  });

  it("1*2*3", function() {
    assert.strictEqual(f(1,2,3), 46);
  });
  
  it("2*2*2", function() {
    assert.strictEqual(f(2,2,2), 54);
  });
});