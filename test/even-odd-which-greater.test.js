/**
 *
 * @param {string} str
 */
function evenOrOdd(str) {
  let sumOdds = 0;
  let sumEvens = 0;

  for (let ch of str.split("")) {
    if (+ch % 2 === 0) {
      sumEvens += +ch;
    } else {
      sumOdds += +ch;
    }
  }

  if (sumEvens === sumOdds) {
    return "Even and Odd are the same";
  }

  if (sumEvens > sumOdds) {
    return "Even is greater than Odd";
  }
  return "Odd is greater than Even";
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(evenOrOdd("12"), "Even is greater than Odd");
    Test.assertEquals(evenOrOdd("123"), "Odd is greater than Even");
    Test.assertEquals(evenOrOdd("112"), "Even and Odd are the same");
  });
});
