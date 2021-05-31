/**
 *
 * @param {number[][]} matrix
 * @param {number[]} rowsToDelete
 * @param {number[]} columnsToDelete
 */
function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
  rowsToDelete
    .sort((a, b) => (a < b ? -1 : 1))
    .reverse()
    .forEach((rowToDelete) => {
      matrix.splice(rowToDelete, 1);
    });

  columnsToDelete
    .sort((a, b) => (a < b ? -1 : 1))
    .reverse()
    .forEach((columnToDelete) => {
      for (let i = 0; i < matrix.length; i++) {
        matrix[i].splice(columnToDelete, 1);
      }
    });

  return matrix;
}

it("It should works for basic tests.", function () {
  expect(
    constructSubmatrix(
      [
        [1, 0, 0, 2],
        [0, 5, 0, 1],
        [0, 0, 3, 5],
      ],
      [1],
      [0, 2]
    )
  ).toEqual([
    [0, 2],
    [0, 5],
  ]);
  expect(
    constructSubmatrix(
      [
        [1, 0, 0, 2],
        [0, 5, 0, 1],
        [0, 0, 3, 5],
      ],
      [],
      [0]
    )
  ).toEqual([
    [0, 0, 2],
    [5, 0, 1],
    [0, 3, 5],
  ]);
  expect(constructSubmatrix([[1]], [], [])).toEqual([[1]]);
  expect(constructSubmatrix([[1]], [], [0])).toEqual([[]]);
  expect(constructSubmatrix([[1]], [0], [0])).toEqual([]);
});
