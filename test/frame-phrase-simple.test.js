/**
 *
 * @param {string} phrase
 * @param {string} ch
 */
function frame(phrase, ch = "*") {
  let result = [];
  result.push(ch.repeat(phrase.length + 4))
  result.push(ch + ' '.repeat(phrase.length + 2) + ch)
  if(phrase) result.push(ch + ' ' + phrase + ' ' + ch)
  result.push(ch + ' '.repeat(phrase.length + 2) + ch)
  result.push(ch.repeat(phrase.length + 4))
  return result.join('\n');
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    const yolo = "@@@@@@@@\n@      @\n@ Yolo @\n@      @\n@@@@@@@@";
    const yolo2 = "********\n*      *\n* Yolo *\n*      *\n********";

    Test.assertEquals(frame("Yolo", "@"), yolo);
    Test.assertEquals(frame("Yolo"), yolo2);
  });
});
