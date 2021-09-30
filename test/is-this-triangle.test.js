/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns 
 */
function isTriangle(a,b,c)
{
   const [x, y, z] = [a, b, c].sort((j, k) => j - k)

   return x > 0 && x + y > z;
}

const { assert } = require("chai")

describe("Public tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(isTriangle(1,2,2), true);
    assert.strictEqual(isTriangle(7,2,2), false);
    assert.strictEqual(isTriangle(1,6,10), false);
  });
})