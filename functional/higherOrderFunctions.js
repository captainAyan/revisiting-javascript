/**
 * Higher Order Functions
 *
 * Mosh's Redux Tutorial
 * https://youtu.be/poQXNp9ItL4?t=932
 */

function sayHello() {
  return "Hello World";
}
// Higher Order (takes function as an argument)
function greet(fnMessage) {
  console.log(fnMessage());
}
greet(sayHello); // Output: Hello World

// Higher Order (returns a function)
function sayHi() {
  return function () {
    return "Hi! World";
  };
}
let fn = sayHi();
let message = fn();
console.log(message); // Output: Hi! World

/// Real world examples
let numbers = [1, 2, 3];
// Map is a Higher Order function
console.log(numbers.map((n) => n * 2)); // Output: [ 2, 4, 6 ]
