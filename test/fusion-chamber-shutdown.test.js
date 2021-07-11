/**
 *
 * @param {number} c
 * @param {number} h
 * @param {number} o
 * @returns
 */
function burner(c, h, o) {
  const water = Math.min(Math.floor(h / 2), o);
  h -= 2 * water;
  o -= water;

  const co2 = Math.min(Math.floor(o / 2), c);
  o -= 2 * co2;
  c -= co2;

  const methane = Math.min(Math.floor(h / 4), c);
  return [water, co2, methane];
}

const { assert } = require("chai");

describe("Fustion Chamber Shutdown", () => {
  it("burner(45, 11, 100)", () =>
    assert.deepStrictEqual(burner(45, 11, 100), [5, 45, 0]));
  it("burner(354, 1023230, 0)", () =>
    assert.deepStrictEqual(burner(354, 1023230, 0), [0, 0, 354]));
  it("burner(939, 3, 694)", () =>
    assert.deepStrictEqual(burner(939, 3, 694), [1, 346, 0]));
  it("burner(215, 41, 82100)", () =>
    assert.deepStrictEqual(burner(215, 41, 82100), [20, 215, 0]));
  it("burner(113, 0, 52)", () =>
    assert.deepStrictEqual(burner(113, 0, 52), [0, 26, 0]));
});
