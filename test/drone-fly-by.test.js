/**
 *
 * @param {string} lamps
 * @param {string} drone
 */
function flyBy(lamps, drone) {
  return (
    "o".repeat(Math.min(lamps.length, drone.length)) +
    "x".repeat(Math.max(0, lamps.length - drone.length))
  );
}

const Test = require("@codewars/test-compat");

describe("Example tests", () => {
  it("tests", () => {
    Test.assertEquals(flyBy("xxxxxx", "====T"), "ooooox");
    Test.assertEquals(flyBy("xxxxxxxxx", "==T"), "oooxxxxxx");
    Test.assertEquals(
      flyBy("xxxxxxxxxxxxxxx", "=========T"),
      "ooooooooooxxxxx"
    );
    Test.assertEquals(flyBy("x", "=T"), "o");
  });
});
