/**
 *
 * @param {('rock' | 'paper' | 'scissors')[]} gestures
 */
function oracle(gestures) {
  const scoreRound = (you, opponent) => {
    if (you === opponent) return 0;
    return {
      rock: { paper: -1, scissors: 1 },
      paper: { rock: 1, scissors: -1 },
      scissors: { paper: 1, rock: -1 },
    }[you][opponent];
  };

  const winningHands = [];

  for (let myHand of ["rock", "paper", "scissors"]) {
    const score = gestures.reduce(
      (acc, opponent) => acc + scoreRound(myHand, opponent),
      0
    );

    if (score > 0) winningHands.push(myHand);
  }

  return winningHands.length ? winningHands.join("/") : "tie";
}

const Test = require("@codewars/test-compat");

it("Example tests", () => {
  Test.assertEquals(oracle(["rock", "paper", "scissors", "rock"]), "paper");
  Test.assertEquals(oracle(["rock", "paper", "scissors"]), "tie");
  Test.assertEquals(
    oracle(["rock", "paper", "paper", "scissors", "scissors"]),
    "scissors"
  );
  Test.assertEquals(oracle(["paper", "scissors", "scissors"]), "rock/scissors");
});
