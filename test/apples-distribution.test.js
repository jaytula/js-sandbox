/**
 * 
 * @param {number} apples 
 * @param {number} boxCapacity 
 * @param {number} maxResidue 
 */
function applesDistribution(apples, boxCapacity, maxResidue) {
  let distributionCount = 0;

  for(let i = 1; i <= boxCapacity; i++) {
    if(apples % i <= maxResidue) distributionCount++;
  }

  return distributionCount;
}

const Test = require("@codewars/test-compat");

describe("Basic Tests", function () {
  it("It should works for basic tests.", function () {
    Test.assertEquals(applesDistribution(7, 4, 1), 3);

    Test.assertEquals(applesDistribution(10, 5, 1), 4);
  });
});
