/**
 *
 * @param {number} card
 * @param {number} ticket
 * @param {number} perc
 */
function movie(card, ticket, perc) {
  let numberOfTimes = 0;

  let systemATotal = 0;
  let systemBTotal = card;

  while (systemBTotal > systemATotal) {
    numberOfTimes++;
    systemATotal += ticket;
    systemBTotal += ticket * perc ** numberOfTimes;
  }
  return numberOfTimes;
}

const Test = require("@codewars/test-compat");

describe("Movie", function () {
  it("Basic tests", function () {
    Test.assertEquals(movie(500, 15, 0.9), 43);
    Test.assertEquals(movie(100, 10, 0.95), 24);
  });
});
