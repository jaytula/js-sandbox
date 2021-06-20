/**
 *
 * @param {string} cc
 */
function maskify(cc) {
  return "#".repeat(cc.length - 4 > 0 ? cc.length - 4 : 0) + cc.substr(-4);
}

const Test = require("@codewars/test-compat");

describe("maskify", function () {
  it("should work for some examples", function () {
    Test.assertEquals(maskify("4556364607935616"), "############5616");
    Test.assertEquals(maskify("1"), "1");
    Test.assertEquals(maskify("11111"), "#1111");
  });
});
