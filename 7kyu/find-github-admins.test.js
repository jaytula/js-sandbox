/**
 * 
 * @param {{language: string, githubAdmin: string}[]} list 
 * @param {string} lang 
 */
function findAdmin(list, lang) {
  return list.filter(item => item.language === lang && item.githubAdmin === 'yes')
}

describe("Tests", () => {
  it("test", () => {
    var list1 = [
      {
        firstName: "Harry",
        lastName: "K.",
        country: "Brazil",
        continent: "Americas",
        age: 22,
        language: "JavaScript",
        githubAdmin: "yes",
      },
      {
        firstName: "Kseniya",
        lastName: "T.",
        country: "Belarus",
        continent: "Europe",
        age: 49,
        language: "Ruby",
        githubAdmin: "no",
      },
      {
        firstName: "Jing",
        lastName: "X.",
        country: "China",
        continent: "Asia",
        age: 34,
        language: "JavaScript",
        githubAdmin: "yes",
      },
      {
        firstName: "Piotr",
        lastName: "B.",
        country: "Poland",
        continent: "Europe",
        age: 128,
        language: "JavaScript",
        githubAdmin: "no",
      },
    ];

    var answer1 = [
      {
        firstName: "Harry",
        lastName: "K.",
        country: "Brazil",
        continent: "Americas",
        age: 22,
        language: "JavaScript",
        githubAdmin: "yes",
      },
      {
        firstName: "Jing",
        lastName: "X.",
        country: "China",
        continent: "Asia",
        age: 34,
        language: "JavaScript",
        githubAdmin: "yes",
      },
    ];

    expect(findAdmin(list1, "JavaScript")).toEqual(answer1);
    expect(findAdmin(list1, "Ruby")).toEqual([]);
    expect(findAdmin(list1, "Python")).toEqual([]);
  });
});
