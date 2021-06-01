/**
 *
 * @param {string} str
 */
function lastSurvivors(str) {
  for (let i = 0; i < str.length; i++) {
    let duplicateIndex = str.slice(i + 1).indexOf(str[i]);
    duplicateIndex = duplicateIndex === -1 ? -1 : i + 1 + duplicateIndex;
    if (duplicateIndex === -1) continue;
    const nextLetter = String.fromCharCode(
      "a".charCodeAt(0) + ((str[i].charCodeAt(0) - "a".charCodeAt(0) + 1) % 26)
    );

    return lastSurvivors(
      str.slice(0, i) +
        nextLetter +
        str.slice(i + 1, duplicateIndex) +
        str.slice(duplicateIndex + 1)
    );
  }
  return str;
}

const isValid = (v) => {
  if (typeof v !== "string")
    throw new Error(`expected a string but got ${JSON.stringify(v)}`);
  else return v;
};

describe("Sample", function () {
  test(`given abaa`, function () {
    let userResult = isValid(lastSurvivors("abaa"));
    expect(userResult.split("").sort().join("")).toBe("ac");
  });
  it(`given zzab`, function () {
    let userResult = isValid(lastSurvivors("zzab"));
    expect(userResult.split("").sort().join("")).toBe("c");
  });
});

describe("Zero Length", function () {
  it(`given`, function () {
    let userResult = isValid(lastSurvivors(""));
    expect(userResult.split("").sort().join("")).toBe("");
  });
});

describe("New Edge", function () {
  it(`given xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh`, function () {
    let userResult = isValid(
      lastSurvivors(
        "xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh"
      )
    );
    expect(userResult.split("").sort().join("")).toBe("acdeghlmnqrvyz");
  });
});
