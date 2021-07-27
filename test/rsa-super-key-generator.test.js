/**
 *
 * @param {number} n
 */
function superKeyGenerator(n) {
  let result = -1;

  for (let threes = 0; threes <= n; threes += 5) {
    const fives = n - threes;
    if (fives % 3 !== 0) continue;
    const s = "5".repeat(fives) + "3".repeat(threes);
    if (+s > +result) result = s;
  }
  return result.toString();
}

const { assert } = require("chai");

describe("Simple Fun #168: RSA Super Key Generator", () => {
  it("It should works for basic tests.", () => {
    assert.strictEqual(superKeyGenerator(1), "-1");
    assert.strictEqual(superKeyGenerator(2), "-1");
    assert.strictEqual(superKeyGenerator(3), "555");
    assert.strictEqual(superKeyGenerator(4), "-1");
    assert.strictEqual(superKeyGenerator(5), "33333");
    assert.strictEqual(superKeyGenerator(6), "555555");
    assert.strictEqual(superKeyGenerator(7), "-1");
    assert.strictEqual(superKeyGenerator(8), "55533333");
    assert.strictEqual(superKeyGenerator(15), "555555555555555");
  });
});
