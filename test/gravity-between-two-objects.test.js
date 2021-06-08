/**
 *
 * @param {[number, number, number]} arr_val
 * @param {[number, number, number]} arr_unit
 */
function solution(arr_val, arr_unit) {
  const MASS_CONVERTER = {
    kg: 1,
    g: 0.001,
    mg: 0.000001,
    μg: 0.000000001,
    lb: 0.453592,
  };
  const LENGTH_CONVERTER = {
    ft: 0.3048,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    μm: 0.000001,
  };

  const G = 6.67e-11;
  const m1 = arr_val[0] * MASS_CONVERTER[arr_unit[0]];
  const m2 = arr_val[1] * MASS_CONVERTER[arr_unit[1]];
  const r = arr_val[2] * LENGTH_CONVERTER[arr_unit[2]];
  return (G * m1 * m2) / r ** 2;
}

const Test = require("@codewars/test-compat");
const { assert } = require("chai");

describe("Tests", () => {
  it("Sample tests", () => {
    let result = 0;
    result = solution([1000, 1000, 100], ["g", "kg", "m"]);
    assert.approximately(result, 6.67e-12, 1e-11);

    result = solution([1000, 1000, 100], ["kg", "kg", "m"]);
    assert.approximately(result, 6.67e-9, 1e-11);

    result = solution([1000, 1000, 100], ["kg", "kg", "cm"]);
    assert.approximately(result, 0.0000667, 1e-7);

    // Test.assertApproxEquals(
    //   solution([1000, 1000, 100], ["g", "kg", "m"]),
    //   6.67e-12
    // );
    // Test.assertApproxEquals(
    //   solution([1000, 1000, 100], ["kg", "kg", "m"]),
    //   6.67e-9
    // );
    // Test.assertApproxEquals(
    //   solution([1000, 1000, 100], ["kg", "kg", "cm"]),
    //   0.0000667
    // );
  });
});
