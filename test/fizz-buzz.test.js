/**
 *
 * @param {number} n
 */
function fizzbuzz(n) {
  return Array.from({ length: n }, (_, idx) => {
    const val = idx + 1;
    return val % 15 === 0
      ? "FizzBuzz"
      : val % 5 === 0
      ? "Buzz"
      : val % 3 === 0
      ? "Fizz"
      : val;
  });
}

const Test = require("@codewars/test-compat");

describe("Fizzbuzz", function () {
  it("Should fizzify 10 numbers correctly", function () {
    var expected = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"];
    Test.assertEquals(
      JSON.stringify(fizzbuzz(10)),
      JSON.stringify(expected),
      "Fails with 10 numbers!"
    );
  });
});
