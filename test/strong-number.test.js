/**
 *
 * @param {number} n
 * @returns
 */
function strong(n) {
  const factorial = (n) => (n === 1 || n === 0 ? 1 : factorial(n - 1) * n);
  return n
    .toString()
    .split("")
    .reduce((acc, curr) => acc + factorial(+curr), 0) === n
    ? "STRONG!!!!"
    : "Not Strong !!";
}

const Test = require("@codewars/test-compat");

describe("Fixed Tests", () => {
  it("Testing for 1", () => {
    Test.assertEquals(strong(1), "STRONG!!!!");
  });
  it("Testing for 2", () => {
    Test.assertEquals(strong(2), "STRONG!!!!");
  });
  it("Testing for 145", () => {
    Test.assertEquals(strong(145), "STRONG!!!!");
  });
  it("Testing for 7", () => {
    Test.assertEquals(strong(7), "Not Strong !!");
  });
  it("Testing for 93", () => {
    Test.assertEquals(strong(93), "Not Strong !!");
  });
  it("Testing for 185", () => {
    Test.assertEquals(strong(185), "Not Strong !!");
  });
});
