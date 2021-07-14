/**
 *
 * @param {string} s
 * @returns
 */
function solve(s) {
  const m = s.match(/[aeiou]+/g);
  return m
    ? Math.max.apply(
        null,
        m.map((s) => s.length)
      )
    : 0;
}

const Test = require("@codewars/test-compat");

test("Longest vowel chain", function () {
  Test.assertEquals(solve("codewarriors"), 2);
  Test.assertEquals(solve("suoidea"), 3);
  Test.assertEquals(solve("ultrarevolutionariees"), 3);
  Test.assertEquals(solve("strengthlessnesses"), 1);
  Test.assertEquals(solve("cuboideonavicuare"), 2);
  Test.assertEquals(solve("chrononhotonthuooaos"), 5);
  Test.assertEquals(solve("iiihoovaeaaaoougjyaw"), 8);
});
