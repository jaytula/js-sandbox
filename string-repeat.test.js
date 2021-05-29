/**
 * 
 * @param {number} n 
 * @param {string} s 
 * @returns 
 */
function repeatStr (n, s) {
  return s.repeat(n)
}

it ("Basic tests", function() {
  expect(repeatStr(3, "*")).toBe("***");
  expect(repeatStr(5, "#")).toBe("#####");
  expect(repeatStr(2, "ha ")).toBe("ha ha ");
});