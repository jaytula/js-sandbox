class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.listeners = [];
  }

  /**
   * 
   * @param {string[]} names 
   */
  howMany(names) {
    let newListenersCount = 0;
    for(let name  of names.map(n => n.toLowerCase())) {
      if(this.listeners.indexOf(name) !== -1) continue;
      this.listeners.push(name);
      newListenersCount++
    }
    return newListenersCount;
  }
}

const chai = require('chai');
const assert = chai.assert;

let mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

describe('What a "Classy" Song', function() {
  it('Test for title and artist', function() {
    assert.strictEqual(mountMoose.title, 'Mount Moose');
    assert.strictEqual(mountMoose.artist, 'The Snazzy Moose');
  });
  it(`Given: 'John', 'Fred', 'Bob', 'Carl', 'RyAn'`, function() {
    assert.strictEqual(mountMoose.howMany(['John', 'Fred', 'Bob', 'Carl', 'RyAn']), 5);
  });
  it(`Given: 'JoHn', 'Luke', 'AmAndA'`, function() {
    assert.strictEqual(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']), 2);
  });
  it(`Given: 'Amanda', 'CalEb', 'CarL', 'Furgus'`, function() {
    assert.strictEqual(mountMoose.howMany(['Amanda', 'CalEb', 'CarL', 'Furgus']), 2);
  });
  it(`Given: 'JOHN', 'FRED', 'BOB', 'CARL', 'RYAN', 'KATE'`, function() {
    assert.strictEqual(mountMoose.howMany(['JOHN', 'FRED', 'BOB', 'CARL', 'RYAN', 'KATE']), 1);
  });
    it(`Given: 'Jack', 'jacK'`, function() {
    assert.strictEqual(mountMoose.howMany(['Jack', 'jacK']), 1);
  });
});