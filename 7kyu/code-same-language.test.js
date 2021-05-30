/**
 * 
 * @param {{language: string}[]} list 
 */
function isSameLanguage(list) {
  // thank you for checking out the Coding Meetup kata :)
  return list.every(e => e.language === list[0].language)
}

describe("Tests", () => {
  test("test", () => {
    var list1 = [
      {
        firstName: "Daniel",
        lastName: "J.",
        country: "Aruba",
        continent: "Americas",
        age: 42,
        language: "JavaScript",
      },
      {
        firstName: "Kseniya",
        lastName: "T.",
        country: "Belarus",
        continent: "Europe",
        age: 22,
        language: "JavaScript",
      },
      {
        firstName: "Hanna",
        lastName: "L.",
        country: "Hungary",
        continent: "Europe",
        age: 65,
        language: "JavaScript",
      },
    ];

    var list2 = [
      {
        firstName: "Mariami",
        lastName: "G.",
        country: "Georgia",
        continent: "Europe",
        age: 29,
        language: "Python",
      },
      {
        firstName: "Mia",
        lastName: "H.",
        country: "Germany",
        continent: "Europe",
        age: 39,
        language: "Ruby",
      },
      {
        firstName: "Maria",
        lastName: "I.",
        country: "Greece",
        continent: "Europe",
        age: 32,
        language: "C",
      },
    ];

    expect(isSameLanguage(list1)).toBe(true);
    expect(isSameLanguage(list2)).toBe(false);
  });
});
