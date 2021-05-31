/**
 * 
 * @param {string} str 
 */
function strToHash(str) {
  if(str.trim() === '') return {}

  const result = {}
  str.split(', ').forEach(item => {
    const [key, value] = item.split('=')
    result[key] = Number(value);
  });
  return result;
}

describe("strToHash", () => {
  it("should pass sample tests", () => {
    expect(strToHash("a=1, b=2, c=3, d=4")).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    expect(strToHash("")).toEqual({});
  });
});
