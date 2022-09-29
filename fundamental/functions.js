/**
 * Functions
 *
 * Roadsidecoder
 * https://youtu.be/btwFJT_xzdg
 *
 * Mosh's Redux Tutorial
 * https://youtu.be/poQXNp9ItL4?t=932
 */

/// Function Declaration / function definition / function statement
function square1(num) {
  return num * num;
}
console.log(square1(3)); // Output: 9

/// Function Expression
const square2 = function (num) {
  return num * num;
};
console.log(square2(4)); // Output: 16

/// Anonymous Function
/**
 * function(num) {
 *  return num * num;
 * }
 *
 * Anonymous functions can be stored in a variable or passed as callback
 */

/// First Class Functions
/**
 * First Class Functions: In a language where a function can be treated like a
 * variable, there functions are called first class functions.
 *
 * In javascript's cases, functions can be passed into another functions, can be
 * used / manipulated and returned from a function, basically what a variable can
 * do, a function can also do.
 */
function square3(num) {
  return num * num;
}

function displaySquare(num, fn) {
  console.log(`Square of ${num} is ${fn(num)}`);
}

displaySquare(2, square3); // Output: Square of 2 is 4

/// IIFE (Immediately Invoked Function Expressions)
/**
 * (
 *   Function Expression,
 * )(...Parameters required by the function)
 */

(function square4(num) {
  console.log(num * num); // Output: 16
})(4); // <-- This argument 4 is the 'num' argument of square4 function

// Example of IIFE
(function (x) {
  return (function (y) {
    console.log(x); // Output: 1
  })(2);
})(1);

/// Params Vs Args (Parameters vs Arguments)
function square5(param) {
  return param * param;
}
square5(2); // Arguments

/// Rest params and Spread args

// Rest params
/**
 * Following is multiplication function. It can take any number of parameters,
 * which will be stored in the array nums.
 */
const mult = (...nums) => nums.reduce((acc, cur) => acc * cur, 1);

console.log(mult(2, 3, 4, 5)); // Output: 120

// Spread args
var args = [2, 3, 4, 5];
console.log(mult(...args)); // Output: 120

/// Arrow Functions

/**
 * the following two function are exactly the same but the later uses array
 * function syntax
 */
const regularFunction = function (a, b) {
  return a * b;
};

const arrowFunction = (a, b) => {
  return a * b;
};

/**
 * Implicit Return
 *
 * For one liner arrow functions you an remove the curly-braces and the wouldn't
 * need to use the return keyword anymore.
 *
 * In the following function, the value of a*b is returned as there are not
 * curly braces surrounding the function body.
 *
 * BONUS: For arrow function with single parameter, you don't need to put
 * parenthesis around the parameter.
 */
const oneLineArrowFunction = (a, b) => a * b;

/**
 * Arrow functions vs Regular Functions
 *
 * Syntax and implicit return are the most significant differences
 *
 * Following are some other differences
 */

/**
 * Arguments Keyword
 *
 * The 'arguments' keyword in a regular function gives passed in argument in an
 * array. This feature doesn't exist in arrow functions
 */
function argumentTest() {
  console.log(arguments);
}
argumentTest(1, 2); // Output: { [Iterator], 0: 1, 1: 2 }

const argumentTest2 = () => {
  console.log(arguments);
};
argumentTest2(1, 2); // Invokes and error (arguments is not defined)

/**
 * This Keyword
 *
 * Regular Function: The 'this' keyword points to the parent object.
 *
 * Arrow Function: The 'this' keyword points to the global object.
 */

let user = {
  username: "Test User",
  rc1: () => {
    console.log(`This is ${this.username}`);
  },
  rc2: function () {
    console.log(`This is ${this.username}`);
  },
};

user.rc1(); // Output: This is undefined
user.rc2(); // Output: This is Test User

/// Higher Order Functions

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

// Real world examples
let numbers = [1, 2, 3];
// Map is a Higher Order function
console.log(numbers.map((n) => n * 2)); // Output: [ 2, 4, 6 ]
