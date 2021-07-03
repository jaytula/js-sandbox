/**
 *
 * @param {number[][]} shape
 * @param {number[]} q
 */
function symmetricShape(shape, q) {
  return shape.concat(
    shape.map((point) => [q[0] + (q[0] - point[0]), q[1] + q[1] - point[1]])
  );
}

const Test = require("@codewars/test-compat");

test("Shape Symmetry", function () {
  Test.assertDeepEquals(
    symmetricShape(
      [
        [-1, -1],
        [1, 2],
      ],
      [0, 0]
    ),
    [
      [-1, -1],
      [1, 2],
      [1, 1],
      [-1, -2],
    ]
  );
  Test.assertDeepEquals(
    symmetricShape(
      [
        [1, 1],
        [-1, -2],
      ],
      [0, 0]
    ),
    [
      [1, 1],
      [-1, -2],
      [-1, -1],
      [1, 2],
    ]
  );
  Test.assertDeepEquals(
    symmetricShape(
      [
        [-1, -1],
        [1, 2],
      ],
      [2, 3]
    ),
    [
      [-1, -1],
      [1, 2],
      [5, 7],
      [3, 4],
    ]
  );
  Test.assertDeepEquals(
    symmetricShape(
      [
        [-5, 6],
        [1, -5],
        [-1, -1],
        [1, 2],
      ],
      [6, 1]
    ),
    [
      [-5, 6],
      [1, -5],
      [-1, -1],
      [1, 2],
      [17, -4],
      [11, 7],
      [13, 3],
      [11, 0],
    ]
  );
  Test.assertDeepEquals(
    symmetricShape(
      [
        [-12, -7],
        [10, 2],
        [-1, -2],
        [-1, -1],
        [1, 2],
      ],
      [-10, 5]
    ),
    [
      [-12, -7],
      [10, 2],
      [-1, -2],
      [-1, -1],
      [1, 2],
      [-8, 17],
      [-30, 8],
      [-19, 12],
      [-19, 11],
      [-21, 8],
    ]
  );
});
