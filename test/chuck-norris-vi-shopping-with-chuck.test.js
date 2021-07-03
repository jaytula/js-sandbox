function price(start, soil, age) {
  // ACTION PANTS!!
}

const Test = require("@codewars/test-compat");

it("Example tests", () => {
  Test.assertEquals(price(19.95, "Barely used", 3), "$26.55");
  Test.assertEquals(price(27.76, "Seen a few high kicks", 15), "$788.99");
  Test.assertEquals(price(13.26, "Blood stained", 25), "$9356.80");
  Test.assertEquals(price(44.11, "Heavily soiled", 7), "$753.66");
  Test.assertEquals(price("pants", 6, 7), "Chuck is bottomless!");
});
