function solution(str, ending) {
  if(ending.length === 0) return true;
  return ending === str.slice(-ending.length);
}

test("test", () => {
  expect(solution("abcde", "cde")).toBe(true);
  expect(solution("abcde", "abc")).toBe(false);
  expect(solution('abc', '')).toBe(true);
});
