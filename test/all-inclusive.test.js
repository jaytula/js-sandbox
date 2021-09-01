/**
 *
 * @param {string} strng
 * @param {string[]} arr
 */
function containAllRots(strng, arr) {
  const rotations = Array.from(
    { length: strng.length },
    (_, idx) =>
      strng.slice(strng.length - idx) + strng.slice(0, strng.length - idx)
  );
  return rotations.every((rotation) => arr.includes(rotation));
}

const Test = require("@codewars/test-compat");

function testing(actual, expected) {
  Test.assertEquals(actual, expected);
}

describe("Basic tests", function () {
  it("containAllRots", function () {
    testing(containAllRots("", []), true);
    testing(containAllRots("", ["bsjq", "qbsj"]), true);
    testing(
      containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]),
      true
    );
    testing(
      containAllRots("XjYABhR", [
        "TzYxlgfnhf",
        "yqVAuoLjMLy",
        "BhRXjYA",
        "YABhRXj",
        "hRXjYAB",
        "jYABhRX",
        "XjYABhR",
        "ABhRXjY",
      ]),
      false
    );
  });
});
