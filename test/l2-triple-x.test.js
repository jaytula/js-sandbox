/**
 *
 * @param {string} str
 */
function tripleX(str) {
  const indexOfFirst = str.indexOf("x");
  if (indexOfFirst === -1) return false;
  return str.slice(indexOfFirst, indexOfFirst + 3) === "xxx";
}

const Test = require("@codewars/test-compat");

describe("L2: Triple X", () => {
  it("test", () => {
    Test.assertEquals(tripleX("abraxxxas"), true);
    Test.assertEquals(tripleX("xoxotrololololololoxxx"), false);
    Test.assertEquals(tripleX("soft kitty, warm kitty, xxxxx"), true);
    Test.assertEquals(tripleX("softx kitty, warm kitty, xxxxx"), false);
  });
});
