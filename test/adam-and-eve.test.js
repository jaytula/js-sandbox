class Human {}

class Man extends Human {
  constructor() {
    super();
  }
}

class Woman extends Human {
  constructor() {
    super();
  }
}

class God {
  /**
   * @returns Human[]
   */
  static create() {
    return [new Man(), new Woman()];
  }
}

const Test = require("@codewars/test-compat");

describe("Basic subclasses - Adam and Eve", function () {
  it("Adam should be a Man", function () {
    let humans = God.create();
    Test.assertEquals(
      humans[0] instanceof Man,
      true,
      "Expected Adam to be a Man"
    );
  });
});
