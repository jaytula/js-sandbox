/**
 *
 * @param {string} seed
 * @param {number} water
 * @param {number} fert
 * @param {number} temp
 */
function plant(seed, water, fert, temp) {
  return temp >= 20 && temp <= 30
    ? ("-".repeat(water) + seed.repeat(fert)).repeat(water)
    : "-".repeat(water * water) + seed;
}

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    expect(plant(",", 3, 7, 25)).toBe("---,,,,,,,---,,,,,,,---,,,,,,,");
    expect(plant("+", 1, 3, 15)).toBe("-+");
    expect(plant(";", 9, 10, 30)).toBe(
      "---------;;;;;;;;;;---------;;;;;;;;;;---------;;;;;;;;;;---------;;;;;;;;;;---------;;;;;;;;;;---------;;;;;;;;;;---------;;;;;;;;;;---------;;;;;;;;;;---------;;;;;;;;;;"
    );
    expect(plant("#", 10, 2, 15)).toBe(
      "----------------------------------------------------------------------------------------------------#"
    );
  });
});
