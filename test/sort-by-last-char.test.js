/**
 *
 * @param {string} s
 */
function last(s) {
  return s
    .split(" ")
    .map((el, idx) => ({ word: el, idx }))
    .sort((a, b) => {
      const lastA = a.word.slice(-1);
      const lastB = b.word.slice(-1);
      if (lastA === lastB) return a.idx - b.idx;
      return lastA.charCodeAt(0) - lastB.charCodeAt(0);
    })
    .map((el) => el.word);
}

const Test = require("@codewars/test-compat");
it("Sort by Last Char", () => {
  Test.assertDeepEquals(last("man i need a taxi up to ubud"), [
    "a",
    "need",
    "ubud",
    "i",
    "taxi",
    "man",
    "to",
    "up",
  ]);
  Test.assertDeepEquals(last("what time are we climbing up the volcano"), [
    "time",
    "are",
    "we",
    "the",
    "climbing",
    "volcano",
    "up",
    "what",
  ]);
  Test.assertDeepEquals(last("take me to semynak"), [
    "take",
    "me",
    "semynak",
    "to",
  ]);
});
