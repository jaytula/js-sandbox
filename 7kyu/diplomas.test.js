/**
 *
 * @param {number} h
 * @param {number} w
 * @param {number} n
 */
function diplomas(h, w, n) {
  if (n <= 0) return 0;

  const areaNeeded = h * w * n;
  let minimumSide = Math.ceil(Math.sqrt(areaNeeded)); // Is the answer if diploma is square
  let hMultiple = Math.floor(minimumSide / h) || 1;
  let wMultiple = Math.floor(minimumSide / w) || 1;
  let sideLength = Math.max(wMultiple * w, hMultiple * h);

  while (true) {
    const totalArea = sideLength ** 2;
    const wastedArea = ((sideLength % w) + (sideLength % h)) * sideLength;

    if (totalArea >= areaNeeded + wastedArea) {
      return sideLength;
    }

    if ((hMultiple + 1) * h < (wMultiple + 1) * w) {
      hMultiple += 1;
    } else {
      wMultiple += 1;
    }
    const height = hMultiple * h;
    const width = wMultiple * w;
    sideLength = Math.max(width, height);
  }
}

describe("Basic Tests", function () {
  it("It should works for basic tests.", function () {
    expect(diplomas(2, 3, 10)).toBe(9);

    expect(diplomas(1, 1, 1)).toBe(1);

    expect(diplomas(17, 21, 0)).toBe(0);

    expect(diplomas(239, 239, 7)).toBe(717);

    expect(diplomas(3, 4, 12)).toBe(12);

    expect(diplomas(567, 120, 129)).toBe(3120);

    expect(diplomas(1, 239, 7)).toBe(239);
  });
});
