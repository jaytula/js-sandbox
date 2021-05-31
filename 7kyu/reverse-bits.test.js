/**
 *
 * @param {number} n
 * @returns
 */
function reverseBits(n) {
  return parseInt(n.toString(2).split("").reverse().join(""), 2);
}

it("should work for some integers", function () {
  expect(reverseBits(417)).toBe(267);
  expect(reverseBits(267)).toBe(417);
  expect(reverseBits(0)).toBe(0);
  expect(reverseBits(2017)).toBe(1087);
  expect(reverseBits(1023)).toBe(1023);
  expect(reverseBits(1024)).toBe(1);
  expect(reverseBits(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER);
});
