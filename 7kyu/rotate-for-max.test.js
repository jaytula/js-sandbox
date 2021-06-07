/**
 *
 * @param {number} n
 */
function maxRot(n) {
  let numString = n.toString();
  const result = [];

  for (let i = 0; i < numString.length; i++) {
    result.push(numString);
    numString =
      numString.slice(0, i) +
      numString.slice(i + 1, numString.length) +
      numString[i];
  }

  return Math.max(...result.map((s) => Number(s)));
}

describe("maxRot", function () {
  it("Basic tests", function () {
    // expect(maxRot(56789)).toEqual(['56789', '67895', '68957', '68579', '68597'])
    expect(maxRot(38458215)).toBe(85821534);
    expect(maxRot(195881031)).toBe(988103115);
    expect(maxRot(896219342)).toBe(962193428);
    expect(maxRot(69418307)).toBe(94183076);
  });
});
