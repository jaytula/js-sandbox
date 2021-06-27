/**
 * 
 * @param {number} n 
 * @param {number} m 
 * @returns 
 */
function check(n, m) {
  // if(n === 1 && m === 1) return false;
  let count = 0;

  function tour(x, y, visited=[]) {
    count++;
    console.log({x, y, visited});
    if(count > 2) return;
    if(x < 0 || x > n-1 || y < 0 || y > m-1) return false;
    const position = `${x},${y}`;
    if(visited.includes(position)) return false;

    const updatedVisited = visited.concat(position);
    if(visited.length === n*m) return true;

    return tour(x+1, y+2, updatedVisited)
      || tour(x+1, y-2, updatedVisited)
      || tour(x+2, y+1, updatedVisited)
      || tour(x+2, y-1, updatedVisited)
      || tour(x-1, y+2, updatedVisited)
      || tour(x-1, y-2, updatedVisited)
      || tour(x-2, y+1, updatedVisited)
      || tour(x-2, y-1, updatedVisited);
  }
  return tour(0, 0, []);
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

// n x n
it(`should check (1 x 1) desk size`, () => {
  assert.deepEqual(check(1, 1), false)
});
it(`should check (2 x 2) .desk size`, () => {
  assert.deepEqual(check(2, 2), false)
});
it(`should check (3 x 3) desk size`, () => {
  assert.deepEqual(check(3, 3), false)
});
it(`should check (4 x 4) desk size`, () => {
  assert.deepEqual(check(4, 4), false)
});
it.only(`should check (5 x 5) desk size`, () => {
  assert.deepEqual(check(5, 5), true)
});
it(`should check (6 x 6) desk size`, () => {
  assert.deepEqual(check(6, 6), true)
});
it(`should check (7 x 7) desk size`, () => {
  assert.deepEqual(check(7, 7), true)
});
it(`should check (8 x 8) desk size`, () => {
  assert.deepEqual(check(8, 8), true)
});
it(`should check (9 x 9) desk size`, () => {
  assert.deepEqual(check(9, 9), true)
});

// some n x m
it(`should check (2 x 5) desk size`, () => {
  assert.deepEqual(check(2, 5), false)
});
it(`should check (2 x 7) desk size`, () => {
  assert.deepEqual(check(2, 7), false)
});
it(`should check (3 x 5) desk size`, () => {
  assert.deepEqual(check(3, 5), false)
});
it(`should check (3 x 7) desk size`, () => {
  assert.deepEqual(check(3, 7), true)
});
it(`should check (4 x 5) desk size`, () => {
  assert.deepEqual(check(4, 5), true)
});
it(`should check (4 x 7) desk size`, () => {
  assert.deepEqual(check(4, 7), true)
});
it(`should check (5 x 7) desk size`, () => {
  assert.deepEqual(check(5, 7), true)
});
it(`should check (6 x 5) desk size`, () => {
  assert.deepEqual(check(6, 5), true)
});
it(`should check (7 x 5) desk size`, () => {
  assert.deepEqual(check(7, 5), true)
});