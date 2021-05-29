/**
 *
 * @param {string} str
 */
function lastSurvivors(str) {
  const firstIndex = str.split("").reduce((acc, curr, idx) => {
    if (acc !== -1) return acc;
    const pairOffsetIndex = str.slice(idx + 1).indexOf(curr);
    return pairOffsetIndex === -1 ? acc : idx;
  }, -1);

  if (firstIndex === -1) return str;

  const pairIndex = str.indexOf(str[firstIndex], firstIndex + 1);
  const nextLetter = String.fromCharCode(
    97 + ((str[firstIndex].charCodeAt(0) - 97 + 1) % 26)
  );

  return lastSurvivors(
    str.slice(0, firstIndex) +
      nextLetter +
      str.slice(firstIndex + 1, pairIndex) +
      str.slice(pairIndex + 1)
  );
}

test("lastSurvivors works 1", () => {
  expect(lastSurvivors("zzzab").split("").sort().join("")).toBe("cz");
});

test("lastSurvivors works 2", () => {
  expect(lastSurvivors("abaa").split("").sort().join("")).toBe("ac");
});

test("lastSurvivors works 3", () => {
  expect(lastSurvivors("zzab").split("").sort().join("")).toBe("c");
});

test("lastSurvivors works 4", () => {
  expect(lastSurvivors("").split("").sort().join("")).toBe("");
});

test("lastSurvivors works 5", () => {
  expect(
    lastSurvivors(
      "xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh"
    )
      .split("")
      .sort()
      .join("")
  ).toBe("acdeghlmnqrvyz");
});
