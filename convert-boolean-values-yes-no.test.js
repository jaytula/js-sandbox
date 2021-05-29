/**
 *
 * @param {boolean} bool
 */
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

it("Testing for basic tests", () => {
  expect(boolToWord(true)).toBe("Yes");
  expect(boolToWord(false)).toBe("No");
});
