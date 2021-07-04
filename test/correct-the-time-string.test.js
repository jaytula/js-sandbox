function timeCorrect(timestring) {
  if (timestring === null || timestring === "") return timestring;
  if (typeof timestring !== "string") return null;
  if (!/\d{2}:\d{2}:\d{2}/.test(timestring)) return null;

  const [hours, minutes, seconds] = timestring.split(":").map((s) => +s);
  const totalMinutes = Math.floor(seconds / 60) + minutes;
  const totalHours = Math.floor(totalMinutes / 60) + hours;
  return [totalHours % 24, totalMinutes % 60, seconds % 60]
    .map((item) => item.toString().padStart(2, "0"))
    .join(":");
}

const Test = require("@codewars/test-compat");

describe("Correct the time-string", () => {
  it("test", () => {
    // Null or Empty
    Test.assertEquals(timeCorrect(null), null);
    Test.assertEquals(timeCorrect(""), "");

    // Invalid Format
    Test.assertEquals(timeCorrect("001122"), null);
    Test.assertEquals(timeCorrect("00;11;22"), null);
    Test.assertEquals(timeCorrect("0a:1c:22"), null);

    // Correction Tests
    Test.assertEquals(timeCorrect("09:10:01"), "09:10:01");
    Test.assertEquals(timeCorrect("11:70:10"), "12:10:10");
    Test.assertEquals(timeCorrect("19:99:09"), "20:39:09");
    Test.assertEquals(timeCorrect("19:99:99"), "20:40:39");
    Test.assertEquals(timeCorrect("24:01:01"), "00:01:01");
    Test.assertEquals(timeCorrect("52:01:01"), "04:01:01");
  });
});
