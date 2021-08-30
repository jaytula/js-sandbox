/**
 * 
 * @param {string} str 
 */
function vowelStart(str) {
  return str.toLowerCase().replace(/[ !,_\-]/g, '').replace(/([aeiou])/g, " $1").trim()
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      vowelStart("It is beautiful weather today!"),
      "it isb e a ut if ulw e ath ert od ay"
    );
    Test.assertEquals(vowelStart("Coding is great"), "c od ing isgr e at");
    Test.assertEquals(
      vowelStart("my number is 0208-533-2325"),
      "myn umb er is02085332325"
    );
    Test.assertEquals(
      vowelStart("oranges, apples, melon, pineapple"),
      "or ang es appl esm el onp in e appl e"
    );
    Test.assertEquals(vowelStart("under_score"), "und ersc or e");
  });
});
