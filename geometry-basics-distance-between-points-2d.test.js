/**
 * 
 * @param {number} x 
 * @param {number} y 
 */
function Point(x, y) {
  this.x = x;
  this.y = y;
}

/**
 * 
 * @param {Point} a 
 * @param {Point} b 
 */
function distanceBetweenPoints(a, b) {
  return Math.sqrt(Math.abs(a.x - b.x)**2 + Math.abs(a.y -b.y)**2)
}

it("should pass these sample tests", function () {
  expect(distanceBetweenPoints(new Point(3, 3), new Point(3, 3))).toBeCloseTo(
    0
  );
  expect(distanceBetweenPoints(new Point(1, 6), new Point(4, 2))).toBeCloseTo(
    5
  );
  expect(
    distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7))
  ).toBeCloseTo(10.728001);
});
