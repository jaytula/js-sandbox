/**
 * 
 * @param {string} defender 
 * @param {string} attacker 
 * @returns 
 */
function fightResolve(defender, attacker)
{
	if(/[pkas]/.test(defender) && /[pkas]/.test(attacker)) return -1;
  if(/[PKAS]/.test(defender) && /[PKAS]/.test(attacker)) return -1;

  const fight = attacker + defender;
  if(fight === 'aS' || fight === 'Sa') return 'a';
  if(fight === 'As' || fight === 'sA') return 'A';

  if(fight === 'sP' || fight === 'Ps') return 's';
  if(fight === 'Sp' || fight === 'pS') return 'S';

  if(fight === 'pK' || fight === 'Kp') return 'p';
  if(fight === 'Pk' || fight === 'kP') return 'P';
  
  if(fight === 'kA' || fight === 'Ak') return 'k';
  if(fight === 'Ka' || fight === 'aK') return 'K';
  
  return attacker;
}	

const Test = require('@codewars/test-compat');

describe("Boardman Fight Resolve", function()
{
  it("test_fights", function()
  {
     Test.assertEquals(fightResolve('K', 'a'), ('K'));
     Test.assertEquals(fightResolve('A', 'a'), ('a'));
     Test.assertEquals(fightResolve('A', 'p'), ('p'));
     Test.assertEquals(fightResolve('k', 'P'), ('P'));
     Test.assertEquals(fightResolve('p', 'A'), ('A'));
  });
  
   it("friendly_fire", function() 
   {
      Test.assertEquals(fightResolve('S', 'P'), (-1));
      Test.assertEquals(fightResolve('A', 'K'), (-1));
      Test.assertEquals(fightResolve('k', 's'), (-1));
      Test.assertEquals(fightResolve('p', 'a'), (-1)); 
   });
});