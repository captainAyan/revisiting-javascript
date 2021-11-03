/**
 * Mutability & Immutability
 *
 * Nisha Singla's Tutorial
 * https://youtu.be/EieiM_mtPGg
 *
 * MDN Web Docs
 * https://developer.mozilla.org/en-US/docs/Glossary/Mutable
 *
 * GeeksForGeeks
 * https://www.geeksforgeeks.org/why-is-immutability-so-important-in-javascript/
 */

/**
 * A princess kisses a frog hoping it will turn into a handsome prince. The
 * concept of immutability says that a frog will always be a frog.
 */

/**
 * Immutability:
 * Object whose state can be modified after it is created.
 *
 * Strings and Numbers are Immutable.
 *
 * Immutability is like "save as", which saves the modified instance as a new file,
 * as oppose to "save", which overrides the present file.
 */
let m = "Hello";
m = m + " World";
/**
 * Following processes occurred on appending the string
 * 1. m is retrieved
 * 2. "World" is appended to existing value of m
 * 3. Result is allocated to a NEW memory location 💾 (like "save as" saves a new file)
 * 4. m is now pointing to the new memory space
 * 5. The previously created memory space is now available for garbage collection 🗑️
 */

// Mutation != Re-assignment
let x = 10;
const y = 10;
/**
 * x = 20; // ✅ This is valid, but
 * y = 21; // ❌ This will throw an error (TypeError: Assignment to constant variable.)
 *
 * But, this is NOT Mutability.
 */

// 💡 Constants (const) are not re-declarable or re-assignable, but are MUTABLE.

/**
 * Mutability:
 * Object whose state cannot be change once the object is created.
 *
 * Objects and Arrays are Mutable.
 */
let a = ["val1", "val2"];
let b = a; // this is referencing the variable 'a'

a.pop(); // removing the last element from the array (Mutation)
console.log(b); // Output: ['val1']
/**
 * As you can see, the value of b changed as the value of a is change. This is
 * MUTABILITY. It also happens in case of an Object.
 *
 * This is how it looks like in the memory,
 *
 * VAR    |  MEMORY_ADDR | VALUE
 *           +------+
 * a ------> | 8001 | ---> ["val1", "val2"]
 *           +------+
 * b -----------↑
 */

// 💡 An Object can change it's State as well as it's Structure;

const user = {
  name: "John Doe",
  age: 20,
};
const anotherUser = user;

anotherUser.age = 21; // changing age property (Mutation -> State)
console.log(user); // Output: { name: 'John Doe', age: 21 }

user.isMale = true; // adding a new property (Mutation -> Structure)
console.log(anotherUser); // Output: { name: 'John Doe', age: 21, isMale: true }

/**
 * Working with Immutable Arrays
 */

// Cloning an array
let p = ["val1", "val2"];
let q = [...p]; // This is called a Spread Operator.
p.pop();
console.log(p); // Output: [ 'val1' ]
console.log(q); // Output: [ 'val1', 'val2' ]

// Adding an element
p = ["val1", "val2"];
q = [...p, "newVal"];
console.log(q); // Output: [ 'val1', 'val2', 'newVal' ]

// Deleting an element using index
let index = 0;
p = ["val1", "val2"];
q = [...p.slice(0, index), ...p.slice(index + 1)];
console.log(q); // Output: [ 'val2' ]

// Filter an elements based on condition
p = [0, 1, 2, 3, 4, 5];
q = p.filter((x) => x != 3); // Condition: if element is not 3
console.log(q); // Output: [ 0, 1, 2, 4, 5 ]

/**
 * Working with Immutable Objects
 */
let c = {
  name: "John",
  age: 30,
};
let d = Object.assign({}, c);
let e = { ...c }; // same thing as Object.assign but using the spread operator

d.name = "Ron";
e.name = "George";

console.log(c); // Output: { name: 'John', age: 30 }
console.log(d); // Output: { name: 'Ron', age: 30 }
console.log(e); // Output: { name: 'George', age: 30 }
