/**
 *
 * @param {string[]} array
 */
function spacey(array) {
  return Array.from({ length: array.length }, (_, idx) =>
    array.slice(0, idx + 1).join("")
  );
}

const Test = require("@codewars/test-compat");

describe("Running out of space", () => {
  it("test", () => {
    Test.assertDeepEquals(spacey(["kevin", "has", "no", "space"]), [
      "kevin",
      "kevinhas",
      "kevinhasno",
      "kevinhasnospace",
    ]);
    Test.assertDeepEquals(spacey(["this", "cheese", "has", "no", "holes"]), [
      "this",
      "thischeese",
      "thischeesehas",
      "thischeesehasno",
      "thischeesehasnoholes",
    ]);
  });
});
