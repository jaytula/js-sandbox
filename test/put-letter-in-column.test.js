function buildRowText(index, character) {
  return (
    "|" +
    Array.from({ length: 9 }, (_, idx) =>
      idx === index ? character : " "
    ).join("|") +
    "|"
  );
}

const { assert } = require("chai");

describe("Put a Letter in a Column", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(buildRowText(2, "A"), "| | |A| | | | | | |");
    assert.strictEqual(buildRowText(0, "A"), "|A| | | | | | | | |");
    assert.strictEqual(buildRowText(8, "A"), "| | | | | | | | |A|");
  });
});
