/**
 * 
 * @param {number} n 
 * @returns 
 */
function getRealFloor(n) {
  if(n <= 0) return n;
  if(n <= 12) return n - 1;
  return n - 2;
}

test("test", () => {
  expect(getRealFloor(1)).toBe(0);
  expect(getRealFloor(5)).toBe(4);
  expect(getRealFloor(15)).toBe(13);
});
