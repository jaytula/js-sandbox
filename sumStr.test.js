/**
 * 
 * @param {string} a 
 * @param {string} b 
 */
function sumStr(a,b) {
  return (+a + +b).toString();
}

test("Tests", () => {
  expect(sumStr("4", "5")).toBe("9");
  expect(sumStr("34", "5")).toBe("39");
});
