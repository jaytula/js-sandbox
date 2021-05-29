/**
 * 
 * @param {string} s 
 * @returns 
 */
function removeExclamationMarks(s) {
  return s.replace(/\!/g, '');
}

describe("Tests", () => {
  test("test", () => {
    expect(removeExclamationMarks("Hello World!")).toBe("Hello World");
    expect(removeExclamationMarks("Hello World!!")).toBe("Hello World");

  });
});
