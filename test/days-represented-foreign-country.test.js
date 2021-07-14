/**
 *
 * @param {number[][]} trips
 */
function daysRepresented(trips) {
  trips.sort((a, b) => a[0] - b[0]);

  for(let i = 0; i < trips.length - 1; i++) {
    if(trips[i][1] >= trips[i+1][0]) {
      trips[i][1] = trips[i+1][0] - 1
    }
  }
  console.log(trips);
  return trips.reduce((acc, [start, end]) => acc + (end - start + 1), 0);
}

const Test = require("@codewars/test-compat");

describe("Days represented in foreign country", function () {
  // it("test for [[10,15],[25,35]]", function () {
  //   Test.assertEquals(
  //     daysRepresented([
  //       [10, 15],
  //       [25, 35],
  //     ]),
  //     17
  //   );
  // });
  // it("test for [[2,8], [220,229],[10,16]]", function () {
  //   Test.assertEquals(
  //     daysRepresented([
  //       [2, 8],
  //       [220, 229],
  //       [10, 16],
  //     ]),
  //     24
  //   );
  // });

  it("test for [[2,8], [220,229],[10,16]]", function () {
    Test.assertEquals(
      daysRepresented([
        [17, 26],
        [2, 8],
        [6, 16],
      ]),
      25
    );
  });
});
