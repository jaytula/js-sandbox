function montyHall(correctDoorNumber, participantGuesses) {
  return Math.round(
    (participantGuesses.filter((guess) => guess !== correctDoorNumber).length /
      participantGuesses.length) *
      100
  );
}

const Test = require("@codewars/test-compat");

describe("Monty Hall Problem", () => {
  it("test", () => {
    Test.assertEquals(
      montyHall(1, [3, 3, 2, 3, 3, 2, 2, 3, 2, 2, 1, 1, 1, 1]),
      71,
      "Testing for a correct door 1"
    );
    Test.assertEquals(
      montyHall(2, [3, 3, 2, 3, 3, 2, 2, 3, 2, 2, 1, 1, 1, 1]),
      64,
      "Testing for a correct door 2"
    );
    Test.assertEquals(
      montyHall(3, [3, 3, 2, 3, 3, 2, 2, 3, 2, 2, 1, 1, 1, 1]),
      64,
      "Testing for a correct door 3"
    );
  });
});
