/**
 * 
 * @param {number} mins 
 * @returns 
 */
function cost(mins) {
  if(mins === 0) return 0;

  const billable = Math.ceil(Math.max(0, (mins - 65) / 30))
  return 30 + billable * 10;
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(cost(45), 30);
    Test.assertEquals(cost(63), 30);
    Test.assertEquals(cost(84), 40);
    Test.assertEquals(cost(102), 50);
    Test.assertEquals(cost(273), 100);
  });
});
