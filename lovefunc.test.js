/**
 * 
 * @param {number} flower1 
 * @param {number} flower2 
 */
function lovefunc(flower1, flower2) {
  return !!((flower1 + flower2) % 2)
}

it("test", () => {
  expect(lovefunc(1, 4)).toBe(true);
  expect(lovefunc(2, 2)).toBe(false);
  expect(lovefunc(0, 1)).toBe(true);
  expect(lovefunc(0, 0)).toBe(false);
});
