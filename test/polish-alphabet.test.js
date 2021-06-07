/**
 * 
 * @param {string} str 
 * @returns 
 */
function correctPolishLetters(str) {
  const mapping = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };

  return str.split("").map((ch) => {
    return ch in mapping ? mapping[ch] : ch;
  }).join('');
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      correctPolishLetters("Jędrzej Błądziński"),
      "Jedrzej Bladzinski"
    );
    Test.assertEquals(correctPolishLetters("Lech Wałęsa"), "Lech Walesa");
    Test.assertEquals(
      correctPolishLetters("Maria Skłodowska-Curie"),
      "Maria Sklodowska-Curie"
    );
  });
});
