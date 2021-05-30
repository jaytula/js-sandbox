/**
 *
 * @param {string} cell
 */
 function chessKnight(cell) {
  let mapping;
  switch(cell[0]) {
    case 'a': 
    case 'h': mapping = [2, 3, 4, 4, 4, 4, 3, 2]; break;
    case 'b': 
    case 'g': mapping = [3, 4, 6, 6, 6, 6, 4, 3]; break;
    default: mapping = [4, 6, 8, 8, 8, 8, 6, 4];
  };
  return mapping[Number(cell[1]) - 1];
}

describe("Basic Tests", function () {
  it("It should works for basic tests.", function () {
    expect(chessKnight("a1")).toBe(2);

    expect(chessKnight("c2")).toBe(6);

    expect(chessKnight("d4")).toBe(8);

    expect(chessKnight("g6")).toBe(6);
  });
});
