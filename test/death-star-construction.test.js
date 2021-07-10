function deathStar(week) {
  const [iron, steel, chromium] = week
    .slice(0, week[7])
    .reduce(
      ([totalIron, totalSteel, totalChromium], [iron, steel, chromium]) => [
        totalIron + iron,
        totalSteel + steel,
        totalChromium + chromium,
      ],
      [0, 0, 0]
    );
  return iron >= 100 && steel >= 75 && chromium >= 50
    ? "The station is completed!"
    : `The station is destroyed! It needed ${Math.max(
        0,
        100 - iron
      )} iron, ${Math.max(0, 75 - steel)} steel and ${Math.max(
        0,
        50 - chromium
      )} chromium for completion.`;
}

const Test = require("@codewars/test-compat");

describe("Death Star Construction", function () {
  it("Should return - The station is destroyed! It needed 0 iron, 0 steel and 1 chromium for completion.", function () {
    Test.assertEquals(
      deathStar([
        [100, 75, 49],
        [20, 15, 20],
        [10, 15, 10],
        [50, 50, 20],
        [20, 15, 10],
        [20, 15, 10],
        [20, 15, 10],
        1,
      ]),
      "The station is destroyed! It needed 0 iron, 0 steel and 1 chromium for completion."
    );
  });
  it("Should return - The station is completed!", function () {
    Test.assertEquals(
      deathStar([
        [20, 15, 10],
        [20, 15, 20],
        [10, 15, 10],
        [50, 50, 20],
        [20, 15, 10],
        [20, 15, 10],
        [20, 15, 10],
        5,
      ]),
      "The station is completed!"
    );
  });
});
