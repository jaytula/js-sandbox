function greet(myName, yourName){
  return "Hello " + yourName + ", my name is " + myName;
}

class Person {
  constructor(name) {
    this.name = name
  }

  greet(greetedName) {
    return `Hello ${greetedName}, my name is ${this.name}`
  }
}

const chai = require('chai');
const assert = chai.assert;

it('Solution', () => {
  const joe = new Person('Joe');
  assert.equal(joe.greet('Kate'), 'Hello Kate, my name is Joe')
})