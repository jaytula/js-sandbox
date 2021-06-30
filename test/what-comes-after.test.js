/**
 *
 * @param {string} str
 * @param {string} l
 */
function comes_after(str, l) {
  let result = "";
  for (let i = 0; i < str.length - 1; i++) {
    if (
      str[i].toLowerCase() === l.toLowerCase() &&
      str[i + 1].match(/[a-zA-Z]/)
    ) {
      result += str[i + 1];
    }
  }
  return result;
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(comes_after("Pirates say arrrrrrrrr.", "r"), "arrrrrrrr");
    Test.assertEquals(
      comes_after("Free coffee for all office workers!", "F"),
      "rfeofi"
    );
    Test.assertEquals(
      comes_after("king kUnta is the sickest rap song ever kNown k!", "k"),
      "iUeN"
    );
    Test.assertEquals(comes_after("p8tice makes pottery p0rfect!", "p"), "o");
    Test.assertEquals(comes_after("d8u d._ rly 2d1s", "D"), "");
    Test.assertEquals(comes_after("nothing to be found here", "z"), "");
  });
});
