/**
 * 
 * @param {string} str 
 * @returns 
 */
const fixParentheses = (str) => {
  let openNeeded = 0;
  let closeNeeded = 0;
  let openCount = 0;

  for (let ch of str) {
    if (ch === ")") {
      if (openCount === 0) {
        openNeeded++;
      } else {
        openCount--;
        closeNeeded--;
      }
    }

    if (ch === "(") {
      openCount++;
      closeNeeded++;
    }
  }

  return "(".repeat(openNeeded) + str + ")".repeat(closeNeeded);
};

const Test = require("@codewars/test-compat");

it("Balance the parentheses", function () {
  Test.assertEquals(fixParentheses(")("), "()()");
  Test.assertEquals(fixParentheses("))))(()("), "(((())))(()())");
});
