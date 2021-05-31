/**
 * 
 * @param {string[]} names 
 */
function sortme (names) {
  return names.sort();
};

describe("Basic tests", () => {
  test("Testing for fixed tests", () => {
    expect(sortme(["one", "two", "three"])).toEqual(["one", "three", "two"]);
  });
});
