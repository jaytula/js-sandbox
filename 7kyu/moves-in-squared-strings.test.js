/**
 *
 * @param {string} strng
 */
function vertMirror(strng) {
  // Your code
  return strng
    .split("\n")
    .map((line) => line.split("").reverse().join(""))
    .join("\n");
}

/**
 *
 * @param {string} strng
 */
function horMirror(strng) {
  // Your code
  return strng.split('\n').reverse().join('\n');
}

/**
 *
 * @param {(str: string) => string} fct
 * @param {string} s
 */
function oper(fct, s) {
  // Your code
  return fct(s);
}

describe("opstrings", function () {
  test("Basic tests vertMirror", function () {
    expect(
      oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu")
    ).toBe("QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw");
    expect(
      oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx")
    ).toBe("EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP");
  });

  test("Basic tests horMirror", function () {
    expect(oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt")).toBe(
      "yeCt\nCSbg\nJVhv\nlVHt"
    );
    expect(oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz")).toBe(
      "cEYz\nLPKo\ndbrZ\nnjMK"
    );
  });
});
