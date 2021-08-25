/**
 * 
 * @param {any[] | string} a 
 * @returns 
 */
function duplicateSandwich(a) {
  const arr = typeof a === 'string' ? a.split('') : a.slice();
  const checkList = []

  /**
   * @type {any}
   */
  let duplicateValue = null

  for(let item of arr) {
    if(checkList.includes(item)) {
      duplicateValue = item;
      break;
    }
    checkList.push(item);
  }

  const firstIndex = arr.indexOf(duplicateValue)
  const lastIndex = arr.lastIndexOf(duplicateValue)

  return a.slice(firstIndex+1, lastIndex);
}

const {assert,config} = require("chai");const { check } = require("prettier");
 config.truncateThreshold = 0;

describe("Duplicate sandwich", function() {
  it("example tests", function() {
    assert.deepEqual( duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8]), [2, 3, 4, 5, 6] );
    assert.deepEqual( duplicateSandwich(["None", "Hello", "Example", "hello", "None", "Extra"]), ["Hello", "Example", "hello"] );
    assert.deepEqual( duplicateSandwich([0, 0]), [] );
    assert.deepEqual( duplicateSandwich( [true, false, true]), [false] );
    assert.deepEqual( duplicateSandwich("example"), "xampl" );
  });
});