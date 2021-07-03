var sing = function () {
  const song = [];
  for (let i = 99; i >= 3; i--) {
    song.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
    song.push(
      `Take one down and pass it around, ${i - 1} bottles of beer on the wall.`
    );
  }

  song.push("2 bottles of beer on the wall, 2 bottles of beer.");
  song.push("Take one down and pass it around, 1 bottle of beer on the wall.");
  song.push("1 bottle of beer on the wall, 1 bottle of beer.");
  song.push(
    "Take one down and pass it around, no more bottles of beer on the wall."
  );
  song.push("No more bottles of beer on the wall, no more bottles of beer.");
  song.push(
    "Go to the store and buy some more, 99 bottles of beer on the wall."
  );

  return song;
};

const assert = require("assert");

describe("Sample test", function () {
  it("Test", function () {
    let song = sing();
    assert.equal(
      song[0],
      "99 bottles of beer on the wall, 99 bottles of beer."
    );
    assert.equal(
      song[199],
      "Go to the store and buy some more, 99 bottles of beer on the wall."
    );
  });
});
