/**
 *
 * @param {number} n
 * @returns
 */
function per(n) {
  const result = [];
  let s = n.toString();
  while (s.length > 1) {
    const sum = s
      .toString()
      .split("")
      .reduce((acc, curr) => acc * +curr, 1);
    result.push(sum);
    s = sum.toString();
  }
  return result;
}

const Test = require("@codewars/test-compat");

describe("Multiplicative Persistnece", () => {
  it("test", () => {
    Test.assertDeepEquals(per(1), []);
    Test.assertDeepEquals(per(10), [0]);
    Test.assertDeepEquals(per(69), [54, 20, 0]);
    Test.assertDeepEquals(
      per(277777788888899),
      [
        4996238671872, 438939648, 4478976, 338688, 27648, 2688, 768, 336, 54,
        20, 0,
      ]
    );
  });
});
