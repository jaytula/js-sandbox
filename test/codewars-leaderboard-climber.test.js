/**
 * 
 * @param {string} user 
 * @param {number} user_score 
 * @param {number} your_score 
 */
 function leaderB(user, user_score, your_score) {
  const needed = user_score - your_score;
  if(needed < 0) return 'Winning!';
  if(needed === 1 || needed === 0) return 'Only need one!';

  const beta = Math.floor(needed / 3)
  const eightKyu = needed % 3
  const dammit = beta + eightKyu > 1000 ? ' Dammit!' : ''
  return `To beat ${user}'s score, I must complete ${beta} Beta kata and ${eightKyu} 8kyu kata.${dammit}`
} 

const Test = require("@codewars/test-compat");

it("Basic tests", () => {
  Test.assertEquals(
    leaderB("g964", 36097, 20000),
    "To beat g964's score, I must complete 5365 Beta kata and 2 8kyu kata. Dammit!"
  );
  Test.assertEquals(
    leaderB("GiacomoSorbi", 23914, 23867),
    "To beat GiacomoSorbi's score, I must complete 15 Beta kata and 2 8kyu kata."
  );
  Test.assertEquals(
    leaderB("ZozoFouchtra", 15991, 12000),
    "To beat ZozoFouchtra's score, I must complete 1330 Beta kata and 1 8kyu kata. Dammit!"
  );
});
