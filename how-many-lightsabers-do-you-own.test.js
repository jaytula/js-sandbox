/**
 *
 * @param {string} name
 * @returns
 */
function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}

it("Testing for fixed tests", () => {
  expect(howManyLightsabersDoYouOwn()).toBe(0);
  expect(howManyLightsabersDoYouOwn("Adam")).toBe(0);
  expect(howManyLightsabersDoYouOwn("Zach")).toBe(18);
});
