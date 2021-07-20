/**
 * 
 * @param {string[]} message 
 * @returns 
 */
function whoTookTheCarKey(message) {
  return message.map(s => String.fromCharCode(parseInt(s, 2))).join('');
}

const Test = require("@codewars/test-compat");

describe("Who Took The Car Keys", () => {
  it("test", () => {
    Test.assertEquals(
      whoTookTheCarKey([
        "01000001",
        "01101100",
        "01100101",
        "01111000",
        "01100001",
        "01101110",
        "01100100",
        "01100101",
        "01110010",
      ]),
      "Alexander"
    );
  });
});
