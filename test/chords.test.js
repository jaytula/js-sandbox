const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

/**
 *
 * @param {string} root
 * @returns
 */
function chords(root) {
  const rootIndex = notes.indexOf(root);
  const majorChord = [
    root,
    notes[(rootIndex + 4) % notes.length],
    notes[(rootIndex + 7) % notes.length],
  ];
  const minorChord = [
    root,
    notes[(rootIndex + 3) % notes.length],
    notes[(rootIndex + 7) % notes.length],
  ];
  return [majorChord, minorChord];
}

const Test = require("@codewars/test-compat");

describe("Chords", () => {
  it("test", () => {
    Test.assertDeepEquals(chords("C"), [
      ["C", "E", "G"],
      ["C", "D#", "G"],
    ]);
    // Test.assertDeepEquals(chords("F"), [["F","A","C"],["F","G#","C"]]);
    // Test.assertDeepEquals(chords("G"), [["G","B","D"],["G","A#","D"]]);
  });
});
