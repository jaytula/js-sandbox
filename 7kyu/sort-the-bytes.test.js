/**
 *
 * @param {number} uint32
 * @returns
 */
function sortBytes(uint32) {
  const hexString = uint32.toString(16);
  const paddedHexString = "0".repeat(8 - hexString.length) + hexString;
  const chunkedAndTransformed = paddedHexString
    .match(/.{2}/g)
    .map((hex) => parseInt(hex, 16))
    .sort((a, b) => (a < b ? -1 : 1))
    .reverse()
    .map((e) => e.toString(16))
    .map((e) => "0".repeat(2 - e.length) + e)
    .join("");
  return parseInt(chunkedAndTransformed, 16);
}

test("example tests", () => {
  expect(sortBytes(0xdeadbeef)).toBe(0xefdebead);
  // expect(sortBytes(0xdadb0d)).toBe(0xdbda0d00);
});

test("property tests", () => {
  for (let i = 100; i--; ) {
    const x = Math.floor(Math.random() * 2 ** 32);
    expect(sortBytes(x) >= x).toBe(true);
  }
});
