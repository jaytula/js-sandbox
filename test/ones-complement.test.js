/**
 *
 * @param {string} n
 */
function onesComplement(n) {
  return n.split("").reduce((acc, curr) => acc + { 0: "1", 1: "0" }[curr], "");
}

const Test = require("@codewars/test-compat");

describe("Ones Complement", () => {
  it("test", () => {
    Test.assertEquals(onesComplement("0"), "1");
    Test.assertEquals(onesComplement("1"), "0");
    Test.assertEquals(onesComplement("01"), "10");
    Test.assertEquals(onesComplement("10"), "01");
    Test.assertEquals(onesComplement("1101"), "0010");
  });
});
