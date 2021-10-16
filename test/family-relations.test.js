/**
 * 
 * @param {string[][]} familyArray 
 * @param {string[]} param1 
 * @returns 
 */
function relations (familyArray, [p1, p2]) {
  /**
   * @type {{[key: string]: string[]}}
   */
  const persons = {}

  familyArray.forEach(([parent, child]) => {
    if(!(parent in persons)) persons[parent] = []
    persons[parent].push(child);
  })


  if(p1 in persons) {
    if(persons[p1].includes(p2)) return 'Daughter';
    if(persons[p1].some(q => (q in persons) && persons[q].includes(p2))) return 'Granddaughter';
  }
  if(p2 in persons) {
    if(persons[p2].includes(p1)) return 'Mother';
    if(persons[p2].some(q => (q in persons) && persons[q].includes(p1))) return 'Grandmother';
  }
  if(Object.keys(persons).some(p => persons[p].includes(p1) && persons[p].includes(p2))) return 'Sister'
  if(Object.keys(persons).some(p => {
    const p1Ok = persons[p].some(q => (q in persons) && persons[q].includes(p1))
    const p2Ok = persons[p].some(q => (q in persons) && persons[q].includes(p2))

    return p1Ok && p2Ok
  })) return 'Cousin';

  if(Object.keys(persons).some(p => {
    if(!(p in persons)) return false;
    const p1Ok = persons[p].includes(p1)
    const p2Ok = persons[p].some(q => (q in persons) && persons[q].includes(p2))

    return p1Ok && p2Ok
  })) return 'Niece';

  if(Object.keys(persons).some(p => {
    if(!(p in persons)) return false;
    const p1Ok = persons[p].some(q => (q in persons) && persons[q].includes(p1))
    const p2Ok = persons[p].includes(p2)

    return p1Ok && p2Ok
  })) return 'Aunt';
}

const assert = require("chai").assert;

describe("Sample tests", function() {
	it("family A", function() {
		const family_a = [["Enid", "Susan"], ["Susan", "Deborah"]];

		assert.strictEqual(relations(family_a, ["Deborah","Enid"]), "Grandmother");
		assert.strictEqual(relations(family_a, ["Enid","Susan"]), "Daughter");
	});

	it("family B", function() {
		const family_b = [['Enid', 'Susan'], ['Susan', 'Deborah'], ['Enid', 'Dianne'], ['Dianne', 'Judy'], ['Dianne', 'Fern']];

		assert.strictEqual(relations(family_b, ["Judy","Fern"]), "Sister");
		assert.strictEqual(relations(family_b, ["Deborah","Fern"]), "Cousin");
	});

  it("family C", () => {
    const family_c = [['Enid', 'Susan'], ['Susan', 'Deborah'], ['Enid', 'Dianne']]
    assert.strictEqual(relations(family_c, ["Dianne", "Deborah"]), "Niece");
    assert.strictEqual(relations(family_c, ["Deborah", "Dianne"]), "Aunt");
  })
});