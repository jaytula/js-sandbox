/**
 * 
 * @param {number} n 
 * @returns 
 */
function isNarcissistic(n) {
  return (
    n ===
    n
      .toString()
      .split("")
      .reduce((acc, digit) => acc + (+digit) ** n.toString().length, 0)
  );
}

const Test = require("@codewars/test-compat");

describe("Basic tests", () => {
  test("test", () => {
    Test.assertEquals(isNarcissistic(153), true);
    Test.assertEquals(isNarcissistic(1), true);
    Test.assertEquals(isNarcissistic(435), false);
    Test.assertEquals(isNarcissistic(370), true);
    Test.assertEquals(isNarcissistic(324), false);
    Test.assertEquals(isNarcissistic(371), true);
    Test.assertEquals(isNarcissistic(4328), false);
    Test.assertEquals(isNarcissistic(407), true);
    Test.assertEquals(isNarcissistic(3248), false);
    Test.assertEquals(isNarcissistic(1634), true);
    Test.assertEquals(isNarcissistic(8208), true);
    Test.assertEquals(isNarcissistic(9474), true);
    Test.assertEquals(isNarcissistic(54748), true);
    Test.assertEquals(isNarcissistic(92727), true);
    Test.assertEquals(isNarcissistic(93084), true);
    Test.assertEquals(isNarcissistic(548834), true);
    Test.assertEquals(isNarcissistic(1741725), true);
    Test.assertEquals(isNarcissistic(4210818), true);
    Test.assertEquals(isNarcissistic(9800817), true);
    Test.assertEquals(isNarcissistic(234229983), false);
    Test.assertEquals(isNarcissistic(9926315), true);
    Test.assertEquals(isNarcissistic(24678050), true);
    Test.assertEquals(isNarcissistic(88593477), true);
    Test.assertEquals(isNarcissistic(11513221922401), false);
    Test.assertEquals(isNarcissistic(146511208), true);
    Test.assertEquals(isNarcissistic(472335975), true);
    Test.assertEquals(isNarcissistic(26548238692458), false);
    Test.assertEquals(isNarcissistic(534494836), true);
    Test.assertEquals(isNarcissistic(912985153), true);
    Test.assertEquals(isNarcissistic(4679307774), true);
  });
});
