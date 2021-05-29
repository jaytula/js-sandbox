function apple(x) {
  return x ** 2 > 1000
    ? "It's hotter than the sun!!"
    : "Help yourself to a honeycomb Yorkie for the glovebox.";
}

test("Example tests", () => {
  expect(apple("50")).toBe("It's hotter than the sun!!");
  expect(apple(4)).toBe(
    "Help yourself to a honeycomb Yorkie for the glovebox."
  );
});
