/**
 * 
 * @param {number[]} a 
 * @param {number} i 
 * @returns 
 */
function leastLarger(a,i) {
  const numAtIndex = a[i]
  const filteredArr = a.filter(el => el > numAtIndex)
  return filteredArr.length ? a.indexOf(Math.min(...filteredArr)) : -1;
}

const assert = require('assert');

describe("Least Larger",()=>{
  it("example tests",()=>{
    assert.strictEqual( leastLarger( [4, 1, 3, 5, 6], 0 ), 3 );
    assert.strictEqual( leastLarger( [4, 1, 3, 5, 6], 4 ), -1 );
    assert.strictEqual( leastLarger( [1, 3, 5, 2, 4], 0 ), 3 );
  });
});