/**
 *
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @returns
 */
function boxCapacity(length, width, height) {
  return (
    Math.floor((length * 12) / 16) *
    Math.floor((width * 12) / 16) *
    Math.floor((height * 12) / 16)
  );
}

const Test = require("@codewars/test-compat");

describe("Testing boxCapacity", function () {
  it("Basic tests", function () {
    Test.assertEquals(boxCapacity(32, 64, 16), 13824);
    Test.assertEquals(boxCapacity(20, 20, 20), 3375);
    Test.assertEquals(boxCapacity(80, 40, 20), 27000);
    Test.assertEquals(boxCapacity(80, 36, 73), 87480);
  });
});
