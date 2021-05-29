/**
 * 
 * @param {string} name 
 * @returns 
 */
function abbrevName(name) {
  return name.split(' ').map(word => word[0].toUpperCase()).join('.');
}

it("test", () => {
  expect(abbrevName("Sam Harris")).toBe("S.H");
  expect(abbrevName("Patrick Feenan")).toBe("P.F");
  expect(abbrevName("Evan Cole")).toBe("E.C");
  expect(abbrevName("P Favuzzi")).toBe("P.F");
  expect(abbrevName("David Mendieta")).toBe("D.M");
});
