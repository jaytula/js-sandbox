/**
 *
 * @param {number} p0
 * @param {number} w0
 * @param {number} p1
 */
function potatoes(p0, w0, p1) {
  const dryMatter = ((100 - p0) / 100) * w0;
  return Math.floor((100 / (100 - p1)) * dryMatter);
}

const Test = require("@codewars/test-compat");

describe("Basic tests", function () {
  it("potatoes", function () {
    Test.assertEquals(potatoes(82, 127, 80), 114);
    Test.assertEquals(potatoes(93, 129, 91), 100);
  });
});
