/**
 * 
 * @param {string[]} arr 
 * @param {number} n 
 */
function first(arr, n=1) {
  return arr.slice(0, n);
}

it("test", () => {
  var arr = ["a", "b", "c", "d", "e"];
  expect(first(arr)).toEqual(["a"]);
  expect(first(arr, 2)).toEqual(["a", "b"]);
});
