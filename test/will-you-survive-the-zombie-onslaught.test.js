/**
 * 
 * @param {number} zombies 
 * @param {number} range 
 * @param {number} ammo 
 */
function zombie_shootout(zombies, range, ammo) {
  const zombiesTotal = zombies
  const rangeTotal = range
  const ammoTotal = ammo
  while(true) {
    if(zombies === 0) return `You shot all ${zombiesTotal} zombies.`;
    if(range === 0) return `You shot ${rangeTotal *2} zombies before being eaten: overwhelmed.`;
    if(ammo === 0) return `You shot ${ammoTotal} zombies before being eaten: ran out of ammo.`;
    zombies--;
    range -= 0.5;
    ammo--;
  }
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(zombie_shootout(3, 10, 10), "You shot all 3 zombies.");
    assert.strictEqual(
      zombie_shootout(100, 8, 200),
      "You shot 16 zombies before being eaten: overwhelmed."
    );
    assert.strictEqual(
      zombie_shootout(50, 10, 8),
      "You shot 8 zombies before being eaten: ran out of ammo."
    );
  });
});
