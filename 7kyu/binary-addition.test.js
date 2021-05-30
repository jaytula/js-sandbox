/**
 *
 * @param {number} a
 * @param {number} b
 */
function addBinary(a, b) {
  return Number(a + b).toString(2);
}

describe("addBinary(1,2)", function () {
  var results1 = addBinary(1, 2);
  it("Should return something that isn't falsy", function () {
    expect(results1).not.toBeFalsy();
  });
  it('Should return "11"', function () {
    expect(results1).toBe("11");
  });
});
