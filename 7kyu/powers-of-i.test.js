function pofi(n) {
  return ['1', 'i', '-1', '-i'][n % 4]
}

describe("Basic Tests", function () {
  it("powers 0 through 10", function () {
    expect(pofi(0)).toBe("1");
    expect(pofi(1)).toBe('i');
    expect(pofi(2)).toBe('-1');
    expect(pofi(3)).toBe('-i');
    expect(pofi(4)).toBe('1');
    expect(pofi(5)).toBe('i');
    expect(pofi(6)).toBe('-1');
    expect(pofi(7)).toBe('-i');
    expect(pofi(8)).toBe('1');
    expect(pofi(9)).toBe('i');
    expect(pofi(10)).toBe('-1');
  });
});
