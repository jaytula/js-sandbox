/**
 *
 * @param {string} numbers
 */
function computerToPhone(numbers) {
  const nums = numbers.split("").map(Number);
  return nums.map((num) => [0, 7, 8, 9, 4, 5, 6, 1, 2, 3][num]).join("");
}

const Test = require("@codewars/test-compat");
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(computerToPhone("0789456123"), "0123456789");
    Test.assertEquals(computerToPhone("000"), "000");
    Test.assertEquals(computerToPhone("94561"), "34567");
    Test.assertEquals(computerToPhone(""), "");
  });
});
