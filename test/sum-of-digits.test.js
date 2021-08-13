/**
 *
 * @param {string | number | undefined} digits
 */
 function sum(digits) {
  if(digits === undefined) return ''
  
  const total = digits.toString().split('').reduce((acc, curr) => acc + +curr, 0);
  return digits.toString().split('').join(' + ') + ' = ' + total;
}


const Test = require("@codewars/test-compat");

describe("Sum of digits", () => {
  it("test", () => {
    Test.assertEquals(sum("3433"), "3 + 4 + 3 + 3 = 13");
    Test.assertEquals(sum("64323"), "6 + 4 + 3 + 2 + 3 = 18");
    Test.assertEquals(sum("8"), "8 = 8");
  });
});
