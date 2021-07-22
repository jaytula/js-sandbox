/**
 *
 * @param {number} amount
 */
function giveChange(amount) {
  let result = [];
  for (let unit of [100, 50, 20, 10, 5, 1]) {
    result.push(Math.floor(amount / unit));
    amount = amount % unit;
  }
  return result.reverse();
}

const Test = require("@codewars/test-compat");

describe("You Got Change?", () => {
  it("test", () => {
    Test.assertDeepEquals(giveChange(365), [0, 1, 1, 0, 1, 3]);
    Test.assertDeepEquals(giveChange(217), [2, 1, 1, 0, 0, 2]);
  });
});
