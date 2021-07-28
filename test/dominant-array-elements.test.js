/**
 * 
 * @param {number[]} arr 
 */
function solve(arr) {
  return arr.filter((value, index) => {
    return arr.slice(index + 1).every(el => value > el);
  })
}

const Test = require("@codewars/test-compat");

it("Dominant array elements", function () {
  Test.assertDeepEquals(solve([16, 17, 14, 3, 14, 5, 2]), [17, 14, 5, 2]);
  Test.assertDeepEquals(solve([92, 52, 93, 31, 89, 87, 77, 105]), [105]);
  Test.assertDeepEquals(solve([75, 47, 42, 56, 13, 55]), [75, 56, 55]);
  Test.assertDeepEquals(solve([67, 54, 27, 85, 66, 88, 31, 24, 49]), [88, 49]);
  Test.assertDeepEquals(solve([76, 17, 25, 36, 29]), [76, 36, 29]);
  Test.assertDeepEquals(solve([104, 18, 37, 9, 36, 47, 28]), [104, 47, 28]);
});
