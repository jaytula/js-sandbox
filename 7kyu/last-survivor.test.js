/**
 * 
 * @param {string} letters 
 * @param {number[]} coords 
 * @returns 
 */
function lastSurvivor(letters, coords) {
  const lettersArray = letters.split('');
  coords.forEach(coord => {
    lettersArray.splice(coord, 1);
  })
  return lettersArray.join('');
}

describe("Sample", function () {
  test("given 'abc' and [1, 1] ", function () {
    expect(lastSurvivor("abc", [1, 1])).toBe("a");
  });

  it("given 'kbc' and [0, 1]", function () {
    expect(lastSurvivor("kbc", [0, 1])).toBe("b");
  });

  it("given 'zbk' and [2, 1]", function () {
    expect(lastSurvivor("zbk", [2, 1])).toBe("z");
  });

  it("given 'zbk' and [2, 1]", function () {
    expect(lastSurvivor("c", [])).toBe("c");
  });
});

describe("New Edge", function () {
  it("given 'foiflxtpicahhkqjswjuyhmypkrdbwnmwbrrvdycqespfvdviucjoyvskltqaqirtjqulprjjoaiagobpftywabqjdmiofpsr' and [8,59,52,93,21,40,88,85,59,10,82,18,74,59,51,47,75,49,23,56,1,33,39,33,34,44,25,0,51,25,36,32,57,10,57,12,51,55,24,55,31,49,6,15,10,48,27,29,38,30,35,42,23,32,9,39,39,36,8,29,2,33,14,3,13,25,9,25,18,10,1,2,20,8,2,11,5,7,0,10,10,8,12,3,5,1,7,7,5,1,4,0,4,0,0,1]", function () {
    expect(
      lastSurvivor(
        "foiflxtpicahhkqjswjuyhmypkrdbwnmwbrrvdycqespfvdviucjoyvskltqaqirtjqulprjjoaiagobpftywabqjdmiofpsr",
        [
          8, 59, 52, 93, 21, 40, 88, 85, 59, 10, 82, 18, 74, 59, 51, 47, 75, 49,
          23, 56, 1, 33, 39, 33, 34, 44, 25, 0, 51, 25, 36, 32, 57, 10, 57, 12,
          51, 55, 24, 55, 31, 49, 6, 15, 10, 48, 27, 29, 38, 30, 35, 42, 23, 32,
          9, 39, 39, 36, 8, 29, 2, 33, 14, 3, 13, 25, 9, 25, 18, 10, 1, 2, 20,
          8, 2, 11, 5, 7, 0, 10, 10, 8, 12, 3, 5, 1, 7, 7, 5, 1, 4, 0, 4, 0, 0,
          1,
        ]
      )
    ).toBe("d");
  });
});
