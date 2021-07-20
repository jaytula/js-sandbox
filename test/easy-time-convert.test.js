/**
 *
 * @param {number} num
 */
function timeConvert(num) {
  if (num <= 0) return "00:00";
  const [hours, minutes] = [Math.floor(num / 60), num % 60];
  return (
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0")
  );
}

const Test = require("@codewars/test-compat");

describe("Easy Time Convert", () => {
  it("test", () => {
    Test.assertEquals(timeConvert(0), "00:00");
    Test.assertEquals(timeConvert(-6), "00:00");
    Test.assertEquals(timeConvert(8), "0" + 0 + ":" + "0" + 8);
    Test.assertEquals(timeConvert(32), "0" + 0 + ":" + 32);
    Test.assertEquals(timeConvert(75), "0" + 1 + ":" + 15);
    Test.assertEquals(timeConvert(63), "0" + 1 + ":" + "0" + 3);
    Test.assertEquals(timeConvert(134), "0" + 2 + ":" + 14);
    Test.assertEquals(timeConvert(180), "0" + 3 + ":" + "0" + 0);
    Test.assertEquals(timeConvert(970), 16 + ":" + 10);
    Test.assertEquals(timeConvert(565757), 9429 + ":" + 17);
  });
});
