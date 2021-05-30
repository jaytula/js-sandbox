/**
 *
 * @param {string} a
 * @param {string} b
 * @returns
 */
function shorter_reverse_longer(a, b) {
  const [shorter, longer] =
    a.length === b.length
      ? [b, a]
      : [a, b].sort((x, y) => (x.length < y.length ? -1 : 1));
  return shorter + longer.split("").reverse().join("") + shorter;
}

describe("Tests", () => {
  it("test", () => {
    expect(shorter_reverse_longer("first", "abcde")).toBe("abcdetsrifabcde");
    expect(shorter_reverse_longer("hello", "bau")).toBe("bauollehbau");
    expect(shorter_reverse_longer("abcde", "fghi")).toBe("fghiedcbafghi");
  });
});
