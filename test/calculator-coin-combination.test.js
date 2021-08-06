/**
 *
 * @param {number} cents
 */
var coinCombo = function (cents) {
  const result = [];
  for (let unit of [25, 10, 5, 1]) {
    result.push(Math.floor(cents / unit));
    cents = cents % unit;
  }

  return result.reverse();
};

const Test = require("@codewars/test-compat");

describe("Calculator: Coin Combination", function () {
  it("takes 1 and returns, 1 Penny.", function () {
    Test.assertDeepEquals(coinCombo(1), [1, 0, 0, 0]);
  });

  it("takes 6 and returns, 1 Penny, 1 Nickle.", function () {
    Test.assertDeepEquals(coinCombo(6), [1, 1, 0, 0]);
  });

  it("takes 11 and returns, 1 Dime, 1 Penny.", function () {
    Test.assertDeepEquals(coinCombo(11), [1, 0, 1, 0]);
  });
});
