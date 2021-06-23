/**
 *
 * @param {number} deposit
 * @param {number} targetAmount
 * @param {number} percent
 */
function dateNbDays(deposit, targetAmount, percent) {
  const days = Math.ceil(
    Math.log2(targetAmount / deposit) / Math.log2(1 + percent / 100 / 360)
  );
  const date = new Date(2016, 0, 1);
  date.setDate(date.getDate() + days);
  return date.toISOString().split("T")[0];
}

const Test = require("@codewars/test-compat");

function testing(actual, expected) {
  Test.assertEquals(actual, expected);
}

describe("dateNbDays", function () {
  it("Basic tests", function () {
    testing(dateNbDays(100, 101, 0.98), "2017-01-01");
    testing(dateNbDays(4281, 5087, 2), "2024-07-03");
    testing(dateNbDays(4620, 5188, 2), "2021-09-19");
    testing(dateNbDays(9999, 11427, 6), "2018-03-13");
    testing(dateNbDays(3525, 4822, 3), "2026-04-18");
    testing(dateNbDays(5923, 6465, 6), "2017-06-10");
    testing(dateNbDays(4254, 4761, 8), "2017-05-22");
    testing(dateNbDays(1244, 2566, 4), "2033-11-04");
    testing(dateNbDays(6328, 7517, 5), "2019-05-25");
    testing(dateNbDays(2920, 3834, 2), "2029-06-03");
    testing(dateNbDays(7792, 8987, 4), "2019-07-09");
  });
});
