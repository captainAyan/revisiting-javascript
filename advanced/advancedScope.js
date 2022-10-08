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

/// Function Scope
var num1 = 20,
  num2 = 3,
  name = "Roadside Coder";

function multiply() {
  return num1 * num2;
  /**
   * Since these variables are not in the function scope, javascript will look
   * for the variable in the parent scope (in this case that is the Global Scope)
   */
}
console.log(multiply()); // Output: 60

// Function Scope in a nested function
function getScore() {
  var num1 = 2, // <--- These variables are being shadowed (check out line 46)
    num2 = 3; // <---┙

  function add() {
    return name + " score " + (num1 + num2);
  }

  return add();
}
console.log(getScore()); // Output: Roadside Coder score 5

/// Questions (RoadsideCoder)
// Question 1: What would be the output of the following program.

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
/**
 * Output:
 * 0
 * 1
 * 2
 * 3
 * 4
 *
 * Explanation:
 *
 * A separate block scope is created for each iteration of the loop, and since
 * LET has block scope, the first iteration will have the the variable 'i' with
 * the value 0, and the following iteration will have 1, 2, 3, and 4.
 *
 * The setTimeout function is a asynchronous function, therefore it doesn't
 * pause the execution of other functions. The first delay value is 0 (0 * 1000),
 * and following are 1000, 2000, 3000, and 4000. As these timers are running
 * asynchronously, the console logging will occur with 1000 second delay, with
 * the first value being printed immediately.
 *
 * Time Graph: [ -- is one second, * is the point of console log]
 *
 * VALUE | DELAY | GRAPH
 * 0     | 0     | *
 * 1     | 1000  | --*
 * 2     | 2000  | -----*
 * 3     | 3000  | --------*
 * 4     | 4000  | -----------*
 */

/**
 * What would be the output of the following program.
 */
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

/**
 * Output:
 * 5
 * 5
 * 5
 * 5
 * 5
 *
 * Explanation: VAR doesn't have a block scope, so the value is alter after each
 * iteration. The value of 'i' becomes 5 at the end, and that is when the loop is
 * exited, after which the seTimeouts start executing.
 */

/// Function Hoisting

fun1(); // Output: Test Code

function fun1() {
  console.log("Test Code");
}
fun1(); // Output: Test Code

/**
 * Explanation:
 *
 * Hoisting works a little differently when it comes to functions. In case of
 * variables, they are hoisted with undefined as their value. But for functions,
 * a function is hoisted completely (with it's body), and therefore can be
 * accessed before it is defined.
 */

// Question 2: What would be the output of the following code?

var x = 21;

var fun2 = function () {
  console.log(x);
  var x = 20;
};

fun2(); // Output: undefined
/**
 * Explanation:
 *
 * The variable x is in the global scope, therefore is accessible inside the fun2
 * function. But since x was declared again in the function, the global variable
 * got shadowed by the local one.
 *
 * On invoking the fun2 function the javascript engine creates a new execution
 * context for that function only. During the creation phase of the execution
 * context, the javascript engine hoists the variable x with undefined. Value of
 * x will be assigned in the execution phase.
 *
 * On starting of the execution phase(of the fun2 function's execution context),
 * the engine looks for value of x in the local scope, and finds it there (so it
 * doesn't look for x in the parent scope, i.e. the Global Scope). Javascript
 * prints undefined, as that is the valued assigned to x when hoisted.
 */
