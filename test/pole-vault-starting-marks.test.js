/**
 * 
 * @param {number} bodyHeight 
 */
function startingMark(bodyHeight) {
  const ratio = (1.83 - 1.52) / (10.67 - 9.45)
  return +(9.45 + (bodyHeight - 1.52) / ratio).toFixed(2);
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(startingMark(1.52), 9.45);
    Test.assertEquals(startingMark(1.83), 10.67);
    Test.assertEquals(startingMark(1.22), 8.27);
    Test.assertEquals(startingMark(2.13), 11.85);
  });
});
