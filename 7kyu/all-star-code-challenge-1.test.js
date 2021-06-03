/**
 * 
 * @param {{name: string, team: string, ppg: number}} playerOne 
 * @param {{name: string, team: string, ppg: number}} playerTwo 
 */
function sumPPG(playerOne, playerTwo) {
  return playerOne.ppg + playerTwo.ppg
}

function NBAplayer(name, team, ppg) {
  this.name = name;
  this.team = team;
  this.ppg = ppg;
}

describe("Tests", () => {
  it("test", () => {


    var iverson = new NBAplayer("Iverson", "76ers", 11.2);
    var jordan = new NBAplayer("Jordan", "bulls", 20.2);
    expect(sumPPG(iverson, jordan)).toBe(31.4);
  });
});
