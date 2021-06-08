/**
 *
 * @param {number[]} xs
 * @param {number} item
 */
function nextItem(xs, item) {
  let found = false;
  for (let i of xs) {
    if (found) return i;
    if (i === item) found = true;
  }
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5), 6);
    Test.assertEquals(nextItem(["a", "b", "c"], "d"), undefined);
    Test.assertEquals(nextItem(["a", "b", "c"], "c"), undefined);
    Test.assertEquals(nextItem("testing", "t"), "e");
    function* countFrom(n) {
      for (let i = n; ; ++i) yield i;
    }
    Test.assertEquals(nextItem(countFrom(1), 12), 13);
  });
});
