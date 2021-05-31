/**
 *
 * @param {string} tStr
 * @returns
 */
function tArea(tStr) {
  return 0.5 * (tStr.trim().split("\n").length - 1) ** 2;
}

describe("Basic test", function () {
  it("First triangle area", function () {
    expect(tArea("\n.\n. .\n")).toBeCloseTo(0.5);
  });

  it("Second triangle area", function () {
    expect(tArea("\n.\n. .\n. . .\n")).toBeCloseTo(2);
  });

  it("Third triangle area", function () {
    expect(
      tArea(
        "\n.\n. .\n. . .\n. . . .\n. . . . .\n. . . . . .\n. . . . . . .\n. . . . . . . .\n. . . . . . . . .\n"
      )
    ).toBeCloseTo(32);
  });

  it("Forth triangle area", function () {
    expect(tArea("\n.\n. .\n. . .\n. . . .\n. . . . .\n")).toBeCloseTo(8);
  });
});
