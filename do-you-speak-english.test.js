/**
 * 
 * @param {string} sentence 
 * @returns 
 */
function spEng(sentence) {
  return sentence.toLowerCase().indexOf('english') !== -1
}

it("test", () => {
  expect(spEng("english")).toBe(true);
  expect(spEng("egnlish")).toBe(false);
});
