/**
 * 
 * @param {number[][]} pairs 
 */
function sumDifferencesBetweenProductsAndLCMs(pairs) {
  const lcm = (a, b) => {
    if(a === b) return a;
    let multipleA = 1
    let multipleB = 1
    while(multipleA*a !== multipleB*b) {
      if((multipleA+1)*a < (multipleB+1)*b) {
        multipleA++
      } else {
        multipleB++
      }
    }
    return a * multipleA
  }
  return pairs.reduce((acc, curr) => {
    return acc + (curr[0]*curr[1] - lcm(curr[0], curr[1]));
  }, 0)
}

test("Basic testes", () => {
  expect(
    sumDifferencesBetweenProductsAndLCMs([
      [15, 18],
      [4, 5],
      [12, 60],
    ])
  ).toBe(840);
  expect(
    sumDifferencesBetweenProductsAndLCMs([
      [1, 1],
      [0, 0],
      [13, 91],
    ])
  ).toBe(1092);
  expect(
    sumDifferencesBetweenProductsAndLCMs([
      [15, 7],
      [4, 5],
      [19, 60],
    ])
  ).toBe(0);
  expect(
    sumDifferencesBetweenProductsAndLCMs([
      [20, 50],
      [10, 10],
      [50, 20],
    ])
  ).toBe(1890);
  expect(sumDifferencesBetweenProductsAndLCMs([])).toBe(0);
});
