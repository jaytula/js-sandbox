/**
 * 
 * @param {number} degrees 
 */
function convert(degrees) {
  // your solution goes here
  const fractional = (degrees % 1) * 3600;
  const result = [Math.floor(degrees), Math.trunc(fractional / 60), Math.round(fractional % 60)]
  if(result[2] === 0) {
    result.pop();
    if(result[1] === 0) {
      result.pop();
    }
  }
  return result;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Convert", () => {
  it("Should convert Decimal Degrees to Degrees, Minutes, Seconds", function() {
    assert.deepEqual(convert(0),[0], "0 degrees");
    assert.deepEqual(convert(40.567), [40, 34, 1], "40 degrees, 34 minutes, 1 second");
    assert.deepEqual(convert(80.5),[ 80, 30 ], "70 degrees, 14 minutes, 2 seconds");
    assert.deepEqual(convert(70.234).length, 3, "Length of the array should be 3");
    assert.deepEqual(convert(20.999), [20, 59, 56], "20 degrees, 59 minutes, 56 second");
    assert.deepEqual(convert(33.333)[1], 19, "Should return 19 minutes");
    assert.deepEqual(convert(50),[50], "50 degrees");
    assert.deepEqual(convert(0.0001388888888888889),[ 0, 0, 1 ], "0 degrees, 0 minutes, 1 second");
    assert.deepEqual(convert(0.0001388888888888888),[ 0 ], "0 degrees, 0 minutes, 1 second");
  });
});

// 567 / 1000 = x / 3600
// x = 567 / 1000 * 3600
// 2041