function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

const Test = require("@codewars/test-compat");

describe("leap year", function () {
  it("should detect leap years", function () {
    Test.assertEquals(isLeapYear(1234), false, "Year 1234");
    Test.assertEquals(isLeapYear(1984), true, "Year 1984");
    Test.assertEquals(isLeapYear(2000), true, "Year 2000");
    Test.assertEquals(isLeapYear(2010), false, "Year 2010");
    Test.assertEquals(isLeapYear(2013), false, "Year 2013");
  });
});
