/**
 * 
 * @param {number} dadYearsOld 
 * @param {number} sonYearsOld 
 */
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(2*sonYearsOld - dadYearsOld);
}

test("Testing for dad's age: 36 and son's age: 7", function () {
  expect(twiceAsOld(36, 7)).toBe(22);
});
test("Testing for dad's age: 55 and son's age: 30", function () {
  expect(twiceAsOld(55, 30)).toBe(5);
});
test("Testing for dad's age: 42 and son's age: 21", function () {
  expect(twiceAsOld(42, 21)).toBe(0);
});
test("Testing for dad's age: 22 and son's age: 1", function () {
  expect(twiceAsOld(22, 1)).toBe(20);
});
test("Testing for dad's age: 29 and son's age: 0", function () {
  expect(twiceAsOld(29, 0)).toBe(29);
});
