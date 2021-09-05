/**
 *
 * @param {string} text
 * @returns
 */
var orderedCount = function (text) {
  /**
   * @type {{[key: string]: {count: number, order: number}}}
   */
  const d = {};
  text.split("").forEach((value, idx) => {
    if (!(value in d)) d[value] = { count: 0, order: idx };
    d[value].count++;
  });

  return Object.entries(d)
    .sort((a, b) => a[1].order - b[1].order)
    .map(([ch, data]) => [ch, data.count]);
};

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const examples = [
  [
    "abracadabra",
    [
      ["a", 5],
      ["b", 2],
      ["r", 2],
      ["c", 1],
      ["d", 1],
    ],
  ],
  [
    "Code Wars",
    [
      ["C", 1],
      ["o", 1],
      ["d", 1],
      ["e", 1],
      [" ", 1],
      ["W", 1],
      ["a", 1],
      ["r", 1],
      ["s", 1],
    ],
  ],
  [
    "233312",
    [
      ["2", 2],
      ["3", 3],
      ["1", 1],
    ],
  ],
];

describe("Sample Tests", function () {
  for (const [text, expected] of examples) {
    it("text: " + JSON.stringify(text), function () {
      assert.deepEqual(orderedCount(text), expected);
    });
  }
});
