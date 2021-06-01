/**
 *
 * @param {string} word
 */
function vowelIndices(word) {
  let result = [];

  word.split("").forEach((ch, idx) => {
    if (ch.match(/[aeiouy]/i)) result.push(idx + 1);
  });

  return result;
}

test("Basic tests", function () {
  // expect(vowelIndices("mmm")).toEqual([]);
  // expect(vowelIndices("apple")).toEqual([1, 5]);
  // expect(vowelIndices("super")).toEqual([2, 4]);
  // expect(vowelIndices("orange")).toEqual([1, 3, 6]);
  // expect(vowelIndices("supercalifragilisticexpialidocious")).toEqual([
  //   2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 25, 27, 29, 31, 32, 33,
  // ]);

  expect(vowelIndices('OalQHWQUVYYEoYMA')).toEqual([1, 2, 8, 10, 11, 12, 13, 14, 16])
});
