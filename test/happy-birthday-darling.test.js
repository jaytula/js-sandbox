/**
 *
 * @param {number} n
 */
function womensAge(n) {
  return `${n}? That's just ${n % 2 ? 21 : 20}, in base ${Math.floor(n / 2)}!`;
}

const assert = require("assert");

describe("Happy Birthday, Darling!", () => {
  it("Basic tests", () => {
    assert.strictEqual(womensAge(32), "32? That's just 20, in base 16!");
    assert.strictEqual(womensAge(39), "39? That's just 21, in base 19!");
    assert.strictEqual(womensAge(22), "22? That's just 20, in base 11!");
    assert.strictEqual(womensAge(65), "65? That's just 21, in base 32!");
    assert.strictEqual(womensAge(83), "83? That's just 21, in base 41!");
  });
});
