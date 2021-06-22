/**
 *
 * @param {string} hallway
 */
function countSalutes(hallway) {
  hallway = hallway.replace(/-/g, "");
  return (
    hallway
      .split("")
      .reduce(
        (meetings, ch, idx) =>
          meetings +
          (ch === ">" ? hallway.slice(idx + 1).replace(/[^<]/g, "").length : 0),
        0
      ) * 2
  );
}

const { assert } = require("chai");

describe("Solution test", () => {
  const act = (hallway, expected) => {
    const actual = countSalutes(hallway);
    const input = hallway;
    it(`input: ${input} expected: ${expected} actual: ${actual}`, () =>
      assert.strictEqual(actual, expected));
  };
  describe("Fixed tests", () => {
    act("<---->---<---<-->", 4);
    act("------", 0);
    act(">>>>>>>>>>>>>>>>>>>>>----<->", 42);
    act("<<----<>---<", 2);
    act(">", 0);
  });
});
