/**
 * 
 * @param {string} name 
 * @param {string} owner 
 */
function greet(name, owner) {
  return `Hello ${name === owner ? 'boss' : 'guest'}`
}

test("test", () => {
  expect(greet("Daniel", "Daniel")).toBe("Hello boss");
  expect(greet("Greg", "Daniel")).toBe("Hello guest");
});
