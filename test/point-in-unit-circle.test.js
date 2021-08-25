/**
 * 
 * @param {number} x 
 * @param {number} y 
 */
function pointInCircle(x,y){
  return x**2 + y**2 <= 1
}

const assert = require('chai').assert;
describe("Tests", () => {
  it("test", () => {
    assert.isTrue(pointInCircle(0,0), 'Origin is inside')
    assert.isFalse(pointInCircle(2,0), '(2, 0) is outside')
    assert.isTrue(pointInCircle(0,0.9), '(0, 0.9) is inside')
    assert.isTrue(pointInCircle(0.5,0.5), '(0.5, 0.5) is inside')
  });
});
