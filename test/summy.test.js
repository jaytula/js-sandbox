/**
 * 
 * @param {string} stringOfInts 
 * @returns 
 */
function summy(stringOfInts) {
  return stringOfInts.split(' ').reduce((acc, s) => acc + +s, 0);
}

const Test = require("@codewars/test-compat");

it("Summy", () => {
  Test.assertEquals(summy("1 2 3"), 6);
  Test.assertEquals(summy("1 2 3 4"), 10);
  Test.assertEquals(summy("1 2 3 4 5"), 15);
  Test.assertEquals(summy("10 10"), 20);
  Test.assertEquals(summy("0 0"), 0);
});
