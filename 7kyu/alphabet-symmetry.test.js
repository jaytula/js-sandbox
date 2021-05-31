/**
 *
 * @param {string[]} arr
 */
function solve(arr) {
  return arr.map((s) =>
    s
      .toLowerCase()
      .split("")
      .reduce(
        (acc, curr, idx) => acc + (curr.charCodeAt(0) - 97 === idx ? 1 : 0),
        0
      )
  );
}

test("Basic tests", function () {
  expect(solve(["abode", "ABc", "xyzD"])).toEqual([4, 3, 1]);
  expect(solve(["abide", "ABc", "xyz"])).toEqual([4, 3, 0]);
  expect(solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"])).toEqual([
    6, 5, 7,
  ]);
  expect(solve(["encode", "abc", "xyzD", "ABmD"])).toEqual([1, 3, 1, 3]);
});
