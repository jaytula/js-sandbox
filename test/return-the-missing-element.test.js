/**
 *
 * @param {number[]} superImportantArray
 */
function getMissingElement(superImportantArray) {
  for(let i = 0; i < 10; i++) {
    if(superImportantArray.indexOf(i) === -1) return i;
  }
}

const Test = require("@codewars/test-compat");

describe("Return the Missing Element", () => {
  it("test", () => {
    Test.assertEquals(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]), 8);
    Test.assertEquals(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]), 3);
  });
});
