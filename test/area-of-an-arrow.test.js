/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function arrowArea(a, b) {
  return a * b / 4;
}

const Test = require("@codewars/test-compat");

describe("Area of an arrow", () => {
  it("test", () => {
    Test.assertEquals(arrowArea(4, 2), 2);
    Test.assertEquals(arrowArea(7, 6), 10.5);
    Test.assertEquals(arrowArea(25, 25), 156.25);
  });
});
