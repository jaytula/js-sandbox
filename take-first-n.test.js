function take(arr, n) {
  return arr.slice(0, n);
}

test("should work for sample tests", function () {
  expect(take([0, 1, 2, 3, 5, 8, 13], 3)).toEqual([0, 1, 2]);
});
