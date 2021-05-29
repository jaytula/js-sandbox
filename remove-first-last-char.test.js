/**
 * 
 * @param {string} str 
 * @returns 
 */
function removeChar(str) {
  return str.slice(1, str.length-1)
}

test("Tests", function () {
  expect(removeChar("eloquent")).toBe("loquen");
  expect(removeChar("country")).toBe("ountr");
  expect(removeChar("person")).toBe("erso");
  expect(removeChar("place")).toBe("lac");
});
