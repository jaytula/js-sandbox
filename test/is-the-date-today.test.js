/**
 * 
 * @param {Date} date 
 * @returns 
 */
function isToday(date) {
  const today = new Date();

  return (
    today.getDate() === date.getDate() &&
    today.getMonth() === date.getMonth() &&
    today.getFullYear() === date.getFullYear()
  );
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    Test.assertEquals(isToday(new Date()), true);
    Test.assertEquals(isToday(tomorrow), false);
    Test.assertEquals(isToday(yesterday), false);
  });
});
