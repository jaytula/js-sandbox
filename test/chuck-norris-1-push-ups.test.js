function chuckPushUps(s) {
  if (typeof s !== "string" || s === '') return "FAIL!!";

  const matches = s.replace(/[^01 ]/g, '').match(/([01]+)/g);
  if (!matches) return "CHUCK SMASH!!";

  const numbers = matches.map((item) => parseInt(item, 2));

  return Math.max(...numbers);
}

const Test = require("@codewars/test-compat");

it("Example tests", () => {
  Test.assertEquals(
    chuckPushUps(
      '1 "Chuck" 10 "Stop that!" 11 "Your vest looks stupid" 100 101 110'
    ),
    6
  );
  Test.assertEquals(
    chuckPushUps(
      '1000 "Did you kick someone in the face today?" 1001 1010 "Will I be making dinner then?!" 1011 110'
    ),
    11
  );
  Test.assertEquals(
    chuckPushUps(
      '10000 "Nice Beard" 1111 "Are you wearing denim shorts?" 1110 1101'
    ),
    16
  );
  Test.assertEquals(chuckPushUps(""), "FAIL!!");
  Test.assertEquals(chuckPushUps([]), "FAIL!!");
  Test.assertEquals(chuckPushUps(1), "FAIL!!");

  Test.assertEquals(chuckPushUps('1ee1gf00t10h1011tr00'), 3244);
});
