/**
 *
 * @param {string} infected
 * @param {string} discovered
 * @returns
 */
function uncensor(infected, discovered) {
  let position = 0;
  let result = "";
  infected.split("").forEach((ch, index) => {
    result += ch === "*" ? discovered[position++] : ch;
  });

  return result;
}

const assert = require("assert");

describe("Censored Strings", function () {
  function test([infected, discovered, answer]) {
    it(`infected = \"${infected}\", discovered = \"${discovered}\"`, () => {
      assert.strictEqual(uncensor(infected, discovered), answer);
    });
  }

  describe("Example Tests", () => {
    let data = [
      ["*h*s *s v*ry *tr*ng*", "Tiiesae", "This is very strange"],
      ["A**Z*N*", "MAIG", "AMAZING"],
      ["xyz", "", "xyz"],
      ["", "", ""],
      ["***", "abc", "abc"],
    ];

    data.forEach(test);
  });
});
