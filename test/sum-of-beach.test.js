/**
 *
 * @param {string} beach
 */
function sumOfABeach(beach) {
  const match = beach.toLowerCase().matchAll(/(sand|water|fish|sun)/g);
  return [...match].length;
}

const { assert } = require("chai");

function testing(inp, exp) {
  it(`Testing for "${inp}", expecting: ${exp}`, function () {
    assert.strictEqual(sumOfABeach(inp), exp);
  });
}

describe("Fixed tests", function () {
  describe("Sample tests", function () {
    testing("SanD", 1);
    testing("sunshine", 1);
    testing("sunsunsunsun", 4);
    testing("123FISH321", 1);
  });

  describe("Longer tests", function () {
    testing(
      "weoqipurpoqwuirpousandiupqwoieurioweuwateruierqpoiweurpouifiShqowieuqpwoeuisUn",
      4
    );
    testing("sAnDsandwaTerwatErfishFishsunsunsandwater", 10);
    testing(
      "joifjepiojfoiejfoajoijawoeifjowejfjoiwaefjiaowefjaofjwoj fawojef ",
      0
    );
    testing(
      "jwefjwjfsandsandwaterwaterfishfishsunsunsandwateriojwhefa;jawof;jawio;f",
      10
    );
    testing(
      "saNdsandwaterwAterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwatersandsandwaterwaterfishfishsunsunsandwater",
      100
    );
  });

  describe("Sliced words", function () {
    testing("sununsu", 1);
    testing("sandandndsansa", 1);
    testing("wateratertererwatewatwa", 1);
    testing("fishishshfisfi", 1);
  });
});
