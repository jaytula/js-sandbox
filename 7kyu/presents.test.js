/**
 *
 * @param {number[]} arr
 */
function presents(arr) {
  const result = Array(arr.length).fill(0);
  arr.forEach((val, idx) => (result[val - 1] = idx + 1));
  return result;
}

describe("Black Square tests", function () {
  it("basic tests", function () {
    [
      { a: [2, 3, 4, 1], ans: [4, 1, 2, 3] },
      { a: [1, 3, 2], ans: [1, 3, 2] },
      { a: [1, 2], ans: [1, 2] },
    ].forEach((t) => expect(presents(t.a)).toEqual(t.ans));
  });
});
