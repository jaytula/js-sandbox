/**
 *
 * @param {number[]} numbers
 * @returns
 */
function stray(numbers) {
  const counts = {};
  for (let num of numbers) {
    if (!(num in counts)) counts[num] = 1;
    else counts[num]++;
  }

  return Number(Object.entries(counts).find(v => v[1] === 1)[0]);
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(stray([1, 1, 2]), 2);
  });
});
