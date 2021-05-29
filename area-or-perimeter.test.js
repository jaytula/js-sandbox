/**
 * 
 * @param {number} l 
 * @param {number} w 
 * @returns 
 */
const areaOrPerimeter = function (l, w) {
  return l === w ? l**2 : (l+w)*2
};

it("test", () => {
  expect(areaOrPerimeter(4, 4)).toBe(16);
  expect(areaOrPerimeter(6, 10)).toBe(32);
});
