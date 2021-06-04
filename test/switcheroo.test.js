/**
 *
 * @param {string} x
 */
function switcheroo(x) {
  return x
    .split("")
    .map(ch => ({ a: "b", b: "a", c: "c" }[ch]))
    .join("");
}

const Test = require("@codewars/test-compat");

describe("Example tests", () => {
  it("test", () => {
    Test.assertEquals(switcheroo("abc"), "bac");
    Test.assertEquals(switcheroo("aaabcccbaaa"), "bbbacccabbb");
    Test.assertEquals(switcheroo("ccccc"), "ccccc");
  });
});
