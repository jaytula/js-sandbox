function describeTheShape(angles) {
  if ([0, 1, 2].includes(angles)) return "this will be a line segment or a dot";

  return `This shape has ${angles} sides and each angle measures ${
    Math.trunc(180 - 360 / angles)
  }`;
}

const Test = require("@codewars/test-compat");

it("describe the shape", () => {
  [
    [6, "This shape has 6 sides and each angle measures 120"],
    [3, "This shape has 3 sides and each angle measures 60"],
    [8, "This shape has 8 sides and each angle measures 135"],
    [90, "This shape has 90 sides and each angle measures 176"],
    [2, "this will be a line segment or a dot"],
    [1, "this will be a line segment or a dot"],
  ].forEach(([a, exp]) => Test.assertEquals(describeTheShape(a), exp));
});
