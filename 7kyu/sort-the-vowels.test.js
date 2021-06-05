/**
 *
 * @param {any} str
 */
function sortVowels(str) {
  if (typeof str !== "string") return "";

  return str
    .split("")
    .map((ch) => (ch.match(/[aeiou]/i) ? "|" + ch : ch + "|"))
    .join("\n");
}

describe("Tests", () => {
  it("test", () => {
    expect(sortVowels("Codewars")).toBe("C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|");
    expect(sortVowels("Rnd Te5T")).toBe("R|\nn|\nd|\n |\nT|\n|e\n5|\nT|");
    expect(sortVowels(1337)).toBe("");
    expect(sortVowels(undefined)).toBe("");
  });
});
