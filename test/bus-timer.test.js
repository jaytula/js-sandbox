/**
 * 
 * @param {stringe} time 
 * @returns 
 */
function busTimer(time) {
  const [hour, minute] = time.split(':').map(Number)
  const minutes = (hour * 60 + minute + 5) % (60*24)

  if(minutes < 360) return (360 - minutes) % 360;
  return (25 - +time.split(':')[1] % 15) % 15
}

const assert = require('chai').assert;

describe("Sample tests", function() {
  it("Tests", function() {
    assert.equal(busTimer("10:00"), 10);
    assert.equal(busTimer("15:05"), 5);
    assert.equal(busTimer("06:10"), 0);
    assert.equal(busTimer("00:00"), 355);
    assert.equal(busTimer("23:56"), 359);
  });
});