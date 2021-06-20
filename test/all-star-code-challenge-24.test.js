/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function hypotenuse(a, b) {
  return Math.sqrt(a**2 + b**2);
}

/**
 * 
 * @param {number} c 
 * @param {number} a 
 */
function leg(c, a) {
  return Math.sqrt(c**2 - a**2);
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(hypotenuse(3, 4), 5);
    Test.assertEquals(leg(5, 3), 4);
  });
});
