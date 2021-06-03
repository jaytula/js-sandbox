/**
 *
 * @param {number[]} arr
 */
function isVow(arr) {
  const vowelCodes = ["a", "e", "i", "o", "u"].map((ch) => ch.charCodeAt(0));

  return arr.map((num) =>
    vowelCodes.indexOf(num) !== -1 ? String.fromCharCode(num) : num
  );
}

test("Basic test 1", () => {
  expect(
    isVow([
      118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
      120, 106,
    ])
  ).toEqual([
    118,
    "u",
    120,
    121,
    "u",
    98,
    122,
    "a",
    120,
    106,
    104,
    116,
    113,
    114,
    113,
    120,
    106,
  ]);
});

test("Basic test 2", () => {
  expect(
    isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103])
  ).toEqual(["e", 121, 110, 113, 113, 103, 121, 121, "e", 107, 103]);
});
