/**
 *
 * @param {(any) => any)} fn
 * @param {any[][]} arr
 * @returns
 */
function gridMap(fn, arr) {
  return arr.map((itemArr) => itemArr.map((item) => fn(item)));
}

it("example tests", () => {
  const numberGrid = [
    [1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [0, 2, 4],
  ];
  expect(gridMap((x) => x + 1, numberGrid)).toEqual([
    [2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [1, 3, 5],
  ]);
  expect(gridMap((x) => x * 2, numberGrid)).toEqual([
    [2, 4, 6, 8],
    [10, 12, 14, 16, 18],
    [0, 4, 8],
  ]);
  expect(gridMap((x) => x ** 2, numberGrid)).toEqual([
    [1, 4, 9, 16],
    [25, 36, 49, 64, 81],
    [0, 4, 16],
  ]);
  const charGrid = [
    ["H", "e", "l", "l", "o"],
    ["W", "o", "r", "l", "d", "!"],
  ];
  expect(gridMap((x) => x.toUpperCase(), charGrid)).toEqual([
    ["H", "E", "L", "L", "O"],
    ["W", "O", "R", "L", "D", "!"],
  ]);
  expect(gridMap((x) => x.toLowerCase(), charGrid)).toEqual([
    ["h", "e", "l", "l", "o"],
    ["w", "o", "r", "l", "d", "!"],
  ]);
});
