/**
 *
 * @param {number} s1
 * @param {number} s2
 * @param {number} s3
 * @returns
 */
function multiples(s1, s2, s3) {
  const result = [];

  const [num1, num2] = [s1, s2].sort((a, b) => a - b);

  for (let i = num2; i < s3; i += num2) {
    if (i % num1 === 0) result.push(i);
  }
  return result;
}

const Test = require("@codewars/test-compat");

describe("Show multiples of 2 numbers within a range", function () {
  it("should test for s1=2 s2=4 s3=40", function () {
    const s1 = 2;
    const s2 = 4;
    const s3 = 40;
    Test.assertDeepEquals(
      multiples(s1, s2, s3),
      [4, 8, 12, 16, 20, 24, 28, 32, 36]
    );
  });
});

describe("Solution", function () {
  it("should test for s1=13 s2=5 s3=800", function () {
    const s1 = 13;
    const s2 = 5;
    const s3 = 800;
    Test.assertDeepEquals(
      multiples(s1, s2, s3),
      [65, 130, 195, 260, 325, 390, 455, 520, 585, 650, 715, 780]
    );
  });
});

describe("Solution", function () {
  it("should test for s1=13 s2=15 s3=800", function () {
    const s1 = 13;
    const s2 = 15;
    const s3 = 800;
    Test.assertDeepEquals(multiples(s1, s2, s3), [195, 390, 585, 780]);
  });
});

describe("Solution", function () {
  it("should test for s1=17 s2=15 s3=800", function () {
    const s1 = 17;
    const s2 = 15;
    const s3 = 800;
    Test.assertDeepEquals(multiples(s1, s2, s3), [255, 510, 765]);
  });
});

describe("Solution", function () {
  it("should test for s1=27 s2=29 s3=2000", function () {
    const s1 = 27;
    const s2 = 29;
    const s3 = 2000;
    Test.assertDeepEquals(multiples(s1, s2, s3), [783, 1566]);
  });
});
