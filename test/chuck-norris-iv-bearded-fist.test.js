/**
 *
 * @param {number[][]} arr
 */
function fistBeard(arr) {
  return arr
    .reduce((acc, curr) => acc.concat(curr), [])
    .map((num) => String.fromCharCode(num))
    .join("");
}

const Test = require("@codewars/test-compat");

it("Example tests", () => {
  Test.assertEquals(
    fistBeard([[78], [117, 110, 99], [104, 117], [107, 115]]),
    "Nunchuks"
  );
  Test.assertEquals(
    fistBeard([
      [70, 97, 99],
      [101, 45, 75, 105, 99, 107],
    ]),
    "Face-Kick"
  );
});
