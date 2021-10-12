/**
 *
 * @param {number[]} times
 */
function cubeTimes(times) {
  times.sort((a, b) => a - b);
  return [+((times[1] + times[2] + times[3]) / 3).toFixed(2), times[0]];
}

const assert = require("chai").assert;

describe("Tests", function () {
  it("Examples", function () {
    assert.deepEqual(cubeTimes([9.5, 7.6, 11.4, 10.5, 8.1]), [9.37, 7.6]);
    assert.deepEqual(cubeTimes([13.4, 12.3, 9.5, 11.9, 20.8]), [12.53, 9.5]);
    assert.deepEqual(cubeTimes([28.3, 14.5, 17.3, 8.9, 10.1]), [13.97, 8.9]);
  });
});
