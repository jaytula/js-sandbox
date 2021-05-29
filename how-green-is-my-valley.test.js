function makeValley(arr) {
  arr.sort((a, b) => (a < b ? -1 : 1));

  const result = [];

  if (arr.length % 2 === 0) {
    arr.forEach((item, idx) => {
      idx % 2 === 0 ? result.push(item) : result.unshift(item);
    });
  } else {
    arr.forEach((item, idx) => {
      idx % 2 === 0 ? result.unshift(item) : result.push(item);
    });
  }

  return result;
}

test("1st Basic tests", function () {
  expect(makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1])).toEqual([
    17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17,
  ]);
});

test("More tests", () => {
  expect(makeValley([20, 7, 6, 2])).toEqual([20, 6, 2, 7]);
});

test("Rest of tests", () => {
  expect(makeValley([14, 10, 8])).toEqual([14, 8, 10]);
  expect(makeValley([20, 18, 17, 13, 12, 12, 10, 9, 4, 2, 2, 1, 1])).toEqual([
    20, 17, 12, 10, 4, 2, 1, 1, 2, 9, 12, 13, 18,
  ]);
  expect(makeValley([20, 16, 14, 10, 1])).toEqual([20, 14, 1, 10, 16]);
  expect(makeValley([19, 19, 18, 14, 12, 11, 9, 7, 4])).toEqual([
    19, 18, 12, 9, 4, 7, 11, 14, 19,
  ]);
  expect(
    makeValley([20, 18, 16, 15, 14, 14, 13, 13, 10, 9, 4, 4, 4, 1])
  ).toEqual([20, 16, 14, 13, 10, 4, 4, 1, 4, 9, 13, 14, 15, 18]);
  expect(makeValley([20, 20, 16, 14, 12, 12, 11, 10, 3, 2])).toEqual([
    20, 16, 12, 11, 3, 2, 10, 12, 14, 20,
  ]);
  expect(makeValley([19, 17, 16, 15, 13, 8, 5, 5, 4, 4, 4])).toEqual([
    19, 16, 13, 5, 4, 4, 4, 5, 8, 15, 17,
  ]);
  expect(makeValley([19, 8, 6])).toEqual([19, 6, 8]);
});
