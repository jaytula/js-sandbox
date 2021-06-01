/**
 *
 * @param {string} s
 * @returns
 */
function coolString(s) {
  if (!s.match(/^[a-zA-Z]+$/)) return false;

  const evens = s.split("").filter((_, idx) => idx % 2 === 0);
  const odds = s.split("").filter((_, idx) => idx % 2 === 1);

  const evenIsUpper = evens[0].toUpperCase() === evens[0];
  const uppers = evenIsUpper ? evens : odds;
  const lowers = evenIsUpper ? odds : evens;
  return (
    uppers.every((s) => s.match(/[A-Z]/)) &&
    lowers.every((s) => s.match(/[a-z]/))
  );
}

describe("Basic Tests", function () {
  it("It should works for basic tests.", function () {
    expect(coolString("aQwFdA")).toBe(true);

    expect(coolString("aBC")).toBe(false);

    expect(coolString("AaA")).toBe(true);

    expect(coolString("q q")).toBe(false);

    expect(coolString("wWw1")).toBe(false);

    expect(coolString("2")).toBe(false);

    expect(coolString("aAaAaAa")).toBe(true);

    expect(coolString("    ")).toBe(false);
  });
});
