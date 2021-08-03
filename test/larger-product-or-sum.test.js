/**
 *
 * @param {number[]} array
 * @param {number} n
 */
function sumOrProduct(array, n) {
  array.sort((a, b) => a - b);
  const sum = array.slice(-n).reduce((acc, curr) => acc + curr, 0);
  const product = array.slice(0, n).reduce((acc, curr) => acc * curr, 1);

  return sum === product ? "same" : sum > product ? "sum" : "product";
}

const Test = require("@codewars/test-compat");

it("Larger Product or Sum", () => {
  Test.assertEquals(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4), "sum");
  Test.assertEquals(
    sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3),
    "product"
  );
  Test.assertEquals(sumOrProduct([10, 20, 3, 30, 5, 4], 3), "same");
});
