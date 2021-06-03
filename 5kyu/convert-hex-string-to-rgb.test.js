/**
 * 
 * @param {string} hexString 
 * @returns 
 */
function hexStringToRGB(hexString) {
  return {
    r: Number.parseInt(hexString.slice(1, 3), 16),
    g: Number.parseInt(hexString.slice(3, 5), 16),
    b: Number.parseInt(hexString.slice(5, 7), 16),
  };
}

describe("Tests", () => {
  it("test", () => {
    expect(hexStringToRGB("#FF9933")).toEqual({ r: 255, g: 153, b: 51 });
  });
});
