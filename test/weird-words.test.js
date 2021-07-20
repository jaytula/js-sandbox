/**
 *
 * @param {string} str
 * @returns
 */
function nextLetter(str) {
  return str.replace(/[a-zA-Z]/g, (ch) =>
    ch === "z"
      ? "a"
      : ch === "Z"
      ? "A"
      : String.fromCharCode(ch.charCodeAt(0) + 1)
  );
}

const Test = require("@codewars/test-compat");

describe("Weird Words", () => {
  it("test", () => {
    Test.assertEquals(nextLetter("My Name Is Zoo"), "Nz Obnf Jt App");
    Test.assertEquals(nextLetter("What is your name"), "Xibu jt zpvs obnf");
    Test.assertEquals(nextLetter("zOo"), "aPp");
  });
});
