/**
 * Closure
 *
 * FireShip
 * https://www.youtube.com/watch?v=vKJpN5FAeF4&t=200s
 *
 * Web Dev Simplified
 * https://www.youtube.com/watch?v=3a0I8ICR1Vg
 */

/**
 * Javascript closures are the functions that can access values outside of their
 * curly braces.
 */

let state = "🐶";

function callMe() {
  return `Hello ${state}`;
}

console.log(callMe()); // Output: Hello 🐶

state = "🐱";
console.log(callMe()); // Output: Hello 🐱

/**
 * The variable 'state' is not declared inside the curly braces of the function
 * 'callMe', yet it can access that variable. (in case you didn't notice, the
 * function 'callMe' is an impure function)
 *
 * That's all you need do know about closure. JK, 😆 not really.
 */

/**
 * Functions inside Functions in closure
 */

function outerFn(outerVar) {
  return function innerFn(innerVar) {
    console.log("Outer Variable: " + outerVar);
    console.log("Inner Variable: " + innerVar);
  };
}
const newFn = outerFn("outside");
newFn("inside");
// Output:
// Outer Variable: outside
// Inner Variable: inside

/**
 * The outerFn is done being executed after calling outerFn("outside"). But then
 * how is it that the outerVar is still accessible to innerFn even though it
 * doesn't exist anymore, or does it, Hey, Vsauce Mi... (👁👄👁)
 *
 * Well it is true that outerVar has gone out of scope, but since javascript can
 * see that there is reference to this variable in the innerFn the, and it (JS)
 * is smart enough to keep track of that variable.
 *
 * We can use principle to keep track of other variables as well.
 */

function outerFn2(outerVar) {
  const outer2 = "Hi"; // this constant will be tracked after outerFn2's execution
  const outer3 = "Hello"; // this will not be tracked
  return function innerFn2(innerVar) {
    console.log(outer2); // this will print: 'Hi'
    console.log("Outer Variable: " + outerVar);
    console.log("Inner Variable: " + innerVar);
  };
}
const newFn2 = outerFn2("outside");
newFn("inside");
/**
 * Output:
 * Hi
 * Outer Variable: outside
 * Inner Variable: inside
 */
