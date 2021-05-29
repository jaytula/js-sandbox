function find_average(array) {
  if(!array.length) return 0;
  
  return array.reduce((acc, curr) => acc+curr, 0) / array.length
}

it("Testing for fixed tests", () => {
  expect(find_average([1,1,1])).toBe(1);
  expect(find_average([1,2,3])).toBe(2);
  expect(find_average([1,2,3,4])).toBe(2.5);
});