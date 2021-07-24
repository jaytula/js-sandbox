function digits(n) {
  return n.toString().length;
}

const Test = require("@codewars/test-compat");

describe("Number of Decimal Digits", function () {
  it("Example tests", function () {
    Test.assertEquals(digits(5), 1, "Fail!");
    Test.assertEquals(digits(12345), 5, "Fail!");
    Test.assertEquals(digits(9876543210), 10, "Fail!");
  });
});
