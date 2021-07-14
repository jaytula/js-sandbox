/**
 *
 * @param {string} row
 */
function triangle(row) {
  if (row.length === 1) return row;
  let nextRow = "";
  for (let i = 0; i < row.length - 1; i++) {
    const [first, second] = [row[i], row[i + 1]].sort();
    nextRow +=
      first === second
        ? first
        : first === "B"
        ? second === "G"
          ? "R"
          : "G"
        : "B";
  }
  return triangle(nextRow);
}

const Test = require("@codewars/test-compat");

describe("Coloured Triangles", () => {
  it("test", () => {
    Test.assertEquals(triangle("GB"), "R");
    Test.assertEquals(triangle("RRR"), "R");
    Test.assertEquals(triangle("RGBG"), "B");
    Test.assertEquals(triangle("RBRGBRB"), "G");
    Test.assertEquals(triangle("RBRGBRBGGRRRBGBBBGG"), "G");
    Test.assertEquals(triangle("B"), "B");
  });
});
