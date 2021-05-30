/**
 *
 * @param {string} s
 */
function printerError(s) {
  const good = s
    .split("")
    .reduce((acc, curr) => acc + (curr.match(/^[a-m]$/) ? 1 : 0), 0);
  return `${s.length - good}/${s.length}`;
}

describe("printerError", function () {
  test("Basic tests", function () {
    var s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
    expect(printerError(s)).toBe("3/56");
  });
});
