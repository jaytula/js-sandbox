/**
 * 
 * @param {string} s 
 * @param {number} partLength 
 */
var splitInParts = function (s, partLength) {
  const rgx = new RegExp(`.{1,${partLength}}`, 'g')
  return s.match(rgx).join(' ')
};

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      splitInParts("supercalifragilisticexpialidocious", 3),
      "sup erc ali fra gil ist ice xpi ali doc iou s"
    );
    Test.assertEquals(splitInParts("HelloKata", 1), "H e l l o K a t a");
    Test.assertEquals(splitInParts("HelloKata", 9), "HelloKata");
  });
});
