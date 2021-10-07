function f(n) {
  return typeof n === 'number' && n >= 1  && n % 1 === 0 ? n * (n+1) / 2 : false
}

const assert = require('chai').assert;

describe("Kata", () => {
  it("Basic tests", () => {
    assert.strictEqual(f(100), 5050);
    assert.strictEqual(f(300), 45150);
    assert.strictEqual(f(50000), 1250025000);
    assert.strictEqual(f("n"), false, "n must be a number");
    assert.strictEqual(f(), false, "n must be a value");
    assert.strictEqual(f(3.14), false, "n must be an integer");
    assert.strictEqual(f(0), false, "a value of n greater than 0 is required");
    assert.strictEqual(f(-10), false, "a positive value of n is required");
  });
});
