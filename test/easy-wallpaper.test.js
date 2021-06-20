/**
 *
 * @param {number} l
 * @param {number} w
 * @param {number } h
 */
function wallpaper(l, w, h) {
  if([l, w, h].some(i => i === 0)) return 'zero';
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
  ];

  return numbers[Math.ceil((((2 * (l + w)) / 0.52) * h * 1.15) / 10)];
}

const Test = require("@codewars/test-compat");

function testing(actual, expected) {
  Test.assertEquals(actual, expected);
}

describe("wallpaper", function () {
  it("Basic tests", function () {
    testing(wallpaper(6.3, 4.5, 3.29), "sixteen");
    testing(wallpaper(7.8, 2.9, 3.29), "sixteen");
    testing(wallpaper(6.3, 5.8, 3.13), "seventeen");
    testing(wallpaper(6.1, 6.7, 2.81), "sixteen");
  });
});
