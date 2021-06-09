/**
 *
 * @param {number} n
 */
function kaprekarSplit(n) {
  const nSquared = (n * n).toString();

  for (let i = 0; i < nSquared.length; i++) {
    if (Number(nSquared.slice(0, i)) + Number(nSquared.slice(i)) === n)
      return i;
  }
  return -1;
}

const assert = require("assert");

it("tests", () => {
  assert.deepStrictEqual(kaprekarSplit(1), 0);
  assert.deepStrictEqual(kaprekarSplit(9), 1);
  assert.deepStrictEqual(kaprekarSplit(45), 2)
  assert.deepStrictEqual(kaprekarSplit(2223), 3)
  assert.deepStrictEqual(kaprekarSplit(5050), 4)
  assert.deepStrictEqual(kaprekarSplit(5051), -1)
});
