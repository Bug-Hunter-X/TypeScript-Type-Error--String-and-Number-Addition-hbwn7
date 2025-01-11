function add(a: number, b: number): number {
  return a + b;
}

function addStringNumber(a: string, b: number): number {
  return parseInt(a) + b
}

let result1 = add(1, 2); // Correct usage: No type error
console.log(result1); // Output: 3

let result2 = addStringNumber("1", 2); // Correct usage with explicit type handling: No type error
console.log(result2); // Output: 3