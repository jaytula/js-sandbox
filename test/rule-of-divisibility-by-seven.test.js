/**
 *
 * @param {number} m
 */
function seven(m) {
  let s = m.toString();
  let numberOfSteps = 0;
  while (s.length > 2) {
    numberOfSteps++;
    s = (+s.slice(0, s.length - 1) - 2 * +s[s.length - 1]).toString();
  }
  return [+s, numberOfSteps];
}

const Test = require("@codewars/test-compat");

describe("Seven", function () {
  it("Basic tests ", function () {
    Test.assertDeepEquals(seven(1021), [10, 2]);
    Test.assertDeepEquals(seven(1603), [7, 2]);
    Test.assertDeepEquals(seven(371), [35, 1]);
    Test.assertDeepEquals(seven(483), [42, 1]);
  });
});
