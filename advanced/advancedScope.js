/**
 * Advanced Scope
 *
 * W3School
 * https://www.w3schools.com/js/js_scope.asp
 */

// Block Scope
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

// Local Scope

// code here can NOT use c
console.log(c); // Error: c is not defined

function myFunction() {
  var c = "test"; // var, let, and const have quite similar effect
  // code here CAN use c
}

// code here can NOT use c
console.log(c); // Error: c is not defined

// Global Scope
var x = 2;       // Global scope
let y = 2;       // Global scope
const z = 2;     // Global scope
// Global variables can be accessed from anywhere.

