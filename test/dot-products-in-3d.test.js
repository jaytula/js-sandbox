class Vector {
  constructor(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }
}

/**
 *
 * @param {Vector} v1
 * @param {Vector} v2
 */
function dotProduct(v1, v2) {
  return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
}

const Test = require("@codewars/test-compat");

describe("Dot Product in 3D", function () {
  it("should return dot product for vectors", function () {
    Test.assertApproxEquals(
      dotProduct(new Vector(2, 0, -1), new Vector(0, -2, 1)),
      -1
    );
    Test.assertApproxEquals(
      dotProduct(new Vector(1, 1, 1), new Vector(2, -2, 2)),
      2
    );
    Test.assertApproxEquals(
      dotProduct(new Vector(7, 2.5, -3), new Vector(0.4, -0.9, 0.2)),
      -0.05
    );
  });
});
