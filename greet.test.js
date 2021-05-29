function greet(name){
  return `Hello, ${name} how are you doing today?`
}

test("Basic tests",() =>{
  expect(greet("Ryan")).toBe("Hello, Ryan how are you doing today?");
  expect(greet("Shingles")).toBe("Hello, Shingles how are you doing today?");
})