const getTurkishNumber = (num) => {
  const digits = [
    "sıfır",
    "bir",
    "iki",
    "üç",
    "dört",
    "beş",
    "altı",
    "yedi",
    "sekiz",
    "dokuz",
  ];
  const tens = [
    "",
    "on",
    "yirmi",
    "otuz",
    "kırk",
    "elli",
    "altmış",
    "yetmiş",
    "seksen",
    "doksan",
  ];
  if (num < 10) return digits[num];
  const tensDigit = Math.floor(num / 10);
  return (
    tens[tensDigit] +
    " " +
    (num % 10 === 0 ? "" : digits[num % 10])
  ).trim();
};

const chai = require("chai");
const assert = chai.assert;

const tests = [
  [0, "sıfır"],
  [16, "on altı"],
  [70, "yetmiş"],
  [26, "yirmi altı"],
];

describe("Tests", function () {
  for (const [input, output] of tests) {
    it(`input: ${JSON.stringify(input)}`, function () {
      assert.strictEqual(getTurkishNumber(input), output);
    });
  }
});
