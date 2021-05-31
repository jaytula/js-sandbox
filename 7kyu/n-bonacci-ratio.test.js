/**
 * 
 * @param {number} n 
 * @returns 
 */
function nBonacciRatio(n) {
  let prev = 1;
  let curr = 1;
  let prevRatio = 1;
  
  while(true) {
    let next = n * curr + prev
    prev = curr;
    curr = next;
    if(Math.abs(curr/prev - prevRatio) < 1e-8) {
      return curr/prev
    }
    prevRatio = curr/prev
  }
}

test("Example Tests", function () {
  expect(nBonacciRatio(1)).toBeCloseTo(1.618033988749895, 8); //the golden ratio
  expect(nBonacciRatio(2)).toBeCloseTo(2.414213562373095, 8); //the silver ratio
  expect(nBonacciRatio(3)).toBeCloseTo(3.302775637731995, 8);
  expect(nBonacciRatio(7)).toBeCloseTo(7.140054944640259, 8);
  expect(nBonacciRatio(95)).toBeCloseTo(95.01052514969709, 8);
});
