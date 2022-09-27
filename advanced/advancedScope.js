/**
 * Advanced Scope
 *
 * W3School
 * https://www.w3schools.com/js/js_scope.asp
 *
 * Roadsidecoder
 * https://youtu.be/oUWRxJ19gfE
 *
 * Akshay Saini
 * https://youtu.be/BNC6slYCj50
 */

/// Block Scope
{
  let a = 2; // same as const in terms of scoping
}
// x can NOT be used here
console.log(a); // Error: a is not defined

{
  var b = 2;
}
// x CAN be used here
console.log(b); // Output: 2

/// Local Scope

// code here can NOT use c
console.log(c); // Error: c is not defined

function myFunction() {
  var c = "test"; // var, let, and const have quite similar effect
  // code here CAN use c
}

// code here can NOT use c
console.log(c); // Error: c is not defined

/// Global Scope
var x = 2; // Global scope
let y = 2; // Global scope
const z = 2; // Global scope
// Global variables can be accessed from anywhere.

/// Variable Shadowing

// in case of LET
let m = 1;
{
  let m = 2;
  console.log(m); // Output: 2
}
console.log(m); // Output: 1

// we can shadow VAR variable using LET but not the other way around

var n = 1;
let o = 2;
{
  let n = 3;
  var o = 4; // This will invoke and error (Illegal Shadowing)
}

/// Hoisting

/**
 * Javascript Execution Context:
 *
 * When we try to execute a JS code, there are two phases.
 * 1. Creation phase:
 *    In creation phase 3 things happens:
 *    1. It creates a global/window object.
 *    2. Sets up memory heap and stores variables and functions
 *    3. Initializes the variables with undefined and stores the function
 *       declarations.
 *
 * 2. Execution phase
 *    In the execution phase, the javascript engine executes the ode line by line.
 *    It assigns the value to variables, and executes the function calls. For every
 *    new function created, javascript creates a new execution context.
 *
 */

/**
 * The following code should return an error like "variable not defined", as the
 * variable is called before declaration. But due to the Creation Phase of the
 * Execution Context, the variables are stored with undefined value before
 * execution.
 */

console.log(g); // Output: undefined
var g = 1;

// The following code shows how the javascript engines sees the aforementioned code
var g;
g = undefined;
console.log(g); // Output: undefined
g = 1;

// Let's see if hoisting works with LET variables
console.log(h); // This will invoke and error (Reference Error)
let h = 1;

/**
 * So, LET variables are not hoisted!?! Nope, they are.
 * 🥁🥁🥁🥁 *Drum roll*
 * 🎉✨ Temporal Dead Zone ✨🎉
 *
 * LET and CONST variables are hoisted, but they are in the temporal dead zone
 * for the time being. YOU CANNOT ACCESS THEM.
 *
 * Temporal Dead Zone is the time since when a LET (or CONST) variable is hoisted
 * and till it is initialized some value.
 *
 * To avoid Temporal Dead Zone, put all the initialization and declaration at the
 * top of the code.
 *
 * They are declared in the Script Scope (use a debugger to check)
 */

/// Global Object and VAR LET CONST
/**
 * Any variable declared using the VAR keyword can be accessed using the window
 * object. Check out the following code,
 */
var a1 = 1;
console.log(a1); // Output: 1
console.log(window.a1); // Output: 1
console.log(this.a1); // Output: 1

let a2 = 1;
console.log(a2); // Output: 1
console.log(window.a2); // Output: undefined
console.log(this.a2); // Output: undefined

const a3 = 1;
console.log(a3); // Output: 1
console.log(window.a3); // Output: undefined
console.log(this.a3); // Output: undefined
