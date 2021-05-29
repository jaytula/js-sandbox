function generateShape(integer) {
  return ('+'.repeat(integer) + '\n').repeat(integer).trim()
}

it("test", () => {
  expect(generateShape(8)).toBe(
    "++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++"
  );
});
