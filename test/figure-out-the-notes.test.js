const NOTES = [ "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", ];

/**
 *
 * @param {string} string
 * @param {number} fret
 */
const whatNote = (string, fret) => {
  return NOTES[
    (NOTES.findIndex((el) => el === string.toUpperCase()) + fret) % NOTES.length
  ];
};

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(whatNote("e", 0), "E");
    Test.assertEquals(whatNote("D", 5), "G");
    Test.assertEquals(whatNote("E", 18), "A#");
    Test.assertEquals(whatNote("A", 1), "A#");
    Test.assertEquals(whatNote("B", 8), "G");
  });
});
