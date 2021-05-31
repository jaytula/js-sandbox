function factorial(n) {
  if (n == 0 || n == 1) return 1;
  return n * factorial(n - 1);
}

test("Basic tests", () => {
  expect(factorial(0)).toBe(1);
  expect(factorial(1)).toBe(1);
  expect(factorial(4)).toBe(24);
  expect(factorial(7)).toBe(5040);
  expect(factorial(17)).toBe(355687428096000);
});
