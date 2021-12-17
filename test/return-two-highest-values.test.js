/**
 * 
 * @param {number[]} arr 
 */
function twoHighest(arr) {
  const set = new Set(arr);
  return [...set.values()].sort((a, b) => b-a).slice(0, 2);
}

const chai = require("chai");
const assert = chai.assert;

describe("Fixed Tests", () => {
  it("Tests", () => {
    assert.deepEqual(twoHighest([]), [])
    assert.deepEqual(twoHighest([15]), [15])
    assert.deepEqual(twoHighest([15, 20, 20, 17]), [20, 17])
  })
})