/**
 *
 * @param {number} n
 */
function drawACross(n) {
  if (n < 3) return "Not possible to draw cross for grids less than 3x3!";
  if (n % 2 === 0) return "Centered cross not possible!";
  const halfHeight = Math.floor(n / 2);
  const halfResult = [];
  for (let i = 0; i < halfHeight; i++) {
    halfResult.push(
      " ".repeat(i) + "x" + " ".repeat(n - (i + 1) * 2) + "x" + " ".repeat(i)
    );
  }

  return halfResult
    .concat(
      " ".repeat(halfHeight) + "x" + " ".repeat(halfHeight),
      [...halfResult].reverse()
    )
    .join("\n");
}

const Test = require("@codewars/test-compat");

describe("Drawing a cross", () => {
  it("test", () => {
    Test.assertEquals(
      drawACross(7),
      "x     x\n x   x \n  x x  \n   x   \n  x x  \n x   x \nx     x",
      "Should draw a centered cross in a grid of height and width n!"
    );
    Test.assertEquals(
      drawACross(15),
      "x             x\n x           x \n  x         x  \n   x       x   \n    x     x    \n     x   x     \n      x x      \n       x       \n      x x      \n     x   x     \n    x     x    \n   x       x   \n  x         x  \n x           x \nx             x",
      "Should draw a centered cross in a grid of height and width n!"
    );
    Test.assertEquals(
      drawACross(25),
      "x                       x\n x                     x \n  x                   x  \n   x                 x   \n    x               x    \n     x             x     \n      x           x      \n       x         x       \n        x       x        \n         x     x         \n          x   x          \n           x x           \n            x            \n           x x           \n          x   x          \n         x     x         \n        x       x        \n       x         x       \n      x           x      \n     x             x     \n    x               x    \n   x                 x   \n  x                   x  \n x                     x \nx                       x",
      "Should draw a centered cross in a grid of height and width n!"
    );
    Test.assertEquals(
      drawACross(6),
      "Centered cross not possible!",
      "If a centred cross is not possible, display the correct error message!"
    );
    Test.assertEquals(
      drawACross(10),
      "Centered cross not possible!",
      "If a centred cross is not possible, display the correct error message!"
    );
    Test.assertEquals(
      drawACross(2),
      "Not possible to draw cross for grids less than 3x3!",
      "Numbers less than three should return the correct error message"
    );
  });
});
