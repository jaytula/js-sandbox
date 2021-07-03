const SOIL_MAP = {
  "Barely used": 10,
  "Seen a few high kicks": 25,
  "Blood stained": 30,
  "Heavily soiled": 50,
};
function price(start, soil, age) {
  if (
    typeof start !== "number" ||
    typeof soil !== "string" ||
    !(soil in SOIL_MAP) || 
    typeof age !== "number"
  )
    return "Chuck is bottomless!";

  return "$" + (start * ((100 + SOIL_MAP[soil]) / 100) ** age).toFixed(2);
}

const Test = require("@codewars/test-compat");

it("Chuck Norris VI - Shopping with Chuck", () => {
  Test.assertEquals(price(19.95, "Barely used", 3), "$26.55");
  Test.assertEquals(price(27.76, "Seen a few high kicks", 15), "$788.99");
  Test.assertEquals(price(13.26, "Blood stained", 25), "$9356.80");
  Test.assertEquals(price(44.11, "Heavily soiled", 7), "$753.66");
  Test.assertEquals(price("pants", 6, 7), "Chuck is bottomless!");
});
