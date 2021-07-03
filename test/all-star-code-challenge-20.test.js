/**
 *
 * @param {(number | string)[]} array1
 * @param {(number | string)[]} array2
 */
function addArrays(array1, array2) {
  if (array1.length !== array2.length) throw new Error("Lengths not equal");
  return Array.from(
    { length: array1.length },
    (_, idx) => array1[idx] + array2[idx]
  );
}

const Test = require("@codewars/test-compat");

describe("All Star Code Challenge #20", () => {
  it("test", () => {
    Test.assertDeepEquals(addArrays([1, 2], [4, 5]), [5, 7]);
    Test.expectError(
      "Should raise an error when arguments are of varying length",
      function () {
        addArrays([1, 2, 3], [4, 5]);
      }
    );
    Test.assertDeepEquals(
      addArrays(["a"], ["b"]),
      ["ab"],
      "Should work with strings as well"
    );
  });
});
