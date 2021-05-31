/**
 * 
 * @param {string} str 
 * @returns 
 */
function calculate(str) {
  const tokens = str.split(/(plus|minus)/);
  const restOfTokens = tokens.slice(1);
  let total = Number(tokens[0]);

  for (let i = 0; i < restOfTokens.length; i += 2) {
    const operation = restOfTokens[i];
    const operand = Number(restOfTokens[i + 1]);
    total = operation === "plus" ? total + operand : total - operand;
  }

  return total.toString();
}

describe("Let's go...", function () {
  test("Basic tests", function () {
    expect(calculate("1plus2plus3plus4")).toBe("10");
    expect(calculate("1minus2minus3minus4")).toBe("-8");
    expect(calculate("1plus2plus3minus4")).toBe("2");
  });
});
