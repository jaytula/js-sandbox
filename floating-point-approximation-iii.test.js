/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns
 */
function quadratic(a, b, c) {
  // your code
  const x1 = (-b + Math.sqrt(b**2 - 4*a*c)) / (2 *a)
  const x2 = (-b - Math.sqrt(b**2 - 4*a*c)) / (2 *a)

  console.log({x1, x2})

  return 1e-14;
}

// a * x**2 + b * x + c = 0


function assertFuzzyEquals(a, b, c, msg = "") {
  // max error
  let merr = 1e-12;
  console.log("Testing ", +a + ", " + b.toExponential(12) + ", " + c);
  let x = quadratic(a, b, c);
  let smallest = Math.abs(x) < 1e-1;
  if (smallest === false) {
    console.log("This root is not the good one");
  }
  let actual = a * x * x + b * x + c;
  console.log("Actual f(x)" + actual.toExponential(12));
  let inrange = Math.abs(actual) <= merr;
  if (inrange === false) {
    msg =
      "Expected value near: 0 " +
      ", got: " +
      actual.toExponential(12) +
      ". Expected error <= " +
      merr.toExponential(12);
    console.log(msg);
  }
  let correct = smallest && inrange;
  expect(correct).toBe(true);
}

describe("quadratic", function () {
  test.only("Basic test 1", function () {
    assertFuzzyEquals(7, 4.0e13, 8);
  });

  test("Basic test 2", function () {
    assertFuzzyEquals(9, 1.0e14, 1);
  });

  test("Basic test 3", function () {
    assertFuzzyEquals(3, 3.0e9, 1);
  });

  test("Basic test 4", function () {
    assertFuzzyEquals(7, 4.0e9, 7);
  });
});
