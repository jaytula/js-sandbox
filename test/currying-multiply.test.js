/**
 * 
 * @param {number[]} arr 
 */
function multiplyAll(arr) {
  return function(num) {
    return arr.map(x => x * num);
  }
}

const Test = require("@codewars/test-compat");

describe("must return an array", function () {
  it("test1", () => {
    Test.expect(Array.isArray(multiplyAll([1])(1)));
  });
});

describe("array has correct length", function () {
  it("test1", () => {
    Test.expect(
      multiplyAll([1, 2])(1).length === 2,
      "array should have the same length as the array passed in as an argument"
    );
  });
});

describe("returned array has correct values", function () {
  it("test1", () => {
    Test.assertDeepEquals(multiplyAll([1, 2, 3])(1), [1, 2, 3]);
    Test.assertDeepEquals(multiplyAll([1, 2, 3])(2), [2, 4, 6]);
    Test.assertDeepEquals(multiplyAll([1, 2, 3])(0), [0, 0, 0]);
    Test.assertDeepEquals(multiplyAll([])(10), [], "should return an empty array");
  });
});
