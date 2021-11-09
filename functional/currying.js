/**
 * Currying
 *
 * Mosh's Redux Tutorial
 * https://youtu.be/poQXNp9ItL4?t=932
 */
import { pipe } from "lodash/fp"; // the "pipe" function was discussed in "./composition.js"

const input = "  JavaScript  ";

const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();

const wrapInDiv = (str) => `<div>${str}</div>`;
const wrapInSpan = (str) => `<span>${str}</span>`;
/**
 * You can see that there is bit of duplication. The only difference 'wrapInDiv'
 * and 'wrapInSpan' have is type of HTML element. It would be nice if we could
 * parameterize this function.
 */

const wrap = (type, str) => `<${type}>${str}</${type}>`; // this much more clean
const _transform = pipe(trim, toLowerCase, wrap);
console.log(_transform(input)); // Output: <javascript>undefined</javascript> 😖
/**
 * Clearly <javascript>undefined</javascript> is not a valid output. So what
 * happened?
 *
 * This pipe function essentially builds a pipeline. The output of each function
 * ends up being the input of the next function.
 *
 * Pipeline :
 * trim(str)
 *  -> toLowerCase(str)  <-- Here is the issue, 'toLowerCase' has one output.
 *    -> wrap(type, str) <-- But 'wrap' has two inputs. So undefined is passed
 *                           into the second argument, resulting the error.
 *
 * This is solved by the use of CURRYING. Currying is a technique that allows us
 * to take a function that has n arguments and convert it to a function that has
 * a single argument.
 */

// NON-Currying version of an addition function
function _add(a, b) {
  return a + b;
}
console.log(_add(1, 2)); // Output: 3

// Currying version of an addition function
function add(a) {
  return function (b) {
    return a + b;
  };
}
const fn = add(1);
console.log(fn(2)); // Output: 3
// Or,
console.log(add(1)(2)); // Output: 3
// add(1,2) -> add(1)(2) (this is Currying)

// Currying using arrow functions
const add2 = (a) => (b) => a + b;
/**
 * 🥴 Just in case you don't know.
 *
 * const addOne = a => a + 1;
 * console.log(addOne(2)); // Output: 3
 *
 * Because, the 'return' is implied when there is no braces, that means
 *
 * const addOne = a => a + 1; // is same as,
 * const addOne = a => return a + 1;
 *
 * This will not not work if you use braces, e.g.
 * const addTwo = a => {a + 2}; // this function will not return anything,
 * const addTwo = a => {return a + 2}; // this function will return a number
 *
 * 🤗 Alright, now that we have that out of the way, we can get back in track.
 *
 * In the add2 function, the first function takes in one argument (i.e. a) and
 * returns a function, which also take one argument (i.e. b) and returns the addition
 * of a and b.
 */
console.log(add2(3)(7)); // Output: 10

/**
 * We can apply this technique to our 'wrap' function.
 */
const curryingWrap = (type) => (str) => `<${type}>${str}</${type}>`;
console.log(curryingWrap("div")("text")); // Output: <div>text</div>

const transform = pipe(trim, toLowerCase, curryingWrap("div"));
console.log(transform(input)); // Output: <div>javascript</div>
/**
 * The pipeline now looks something like this,
 *
 * Pipeline :
 * trim(str)
 *  -> toLowerCase(str)
 *    -> [str => `<${type}>${str}</${type}>`] <- This anonymous function is the
 *                                               returned value of curryingWrap("div"),
 *                                               which then takes output of toLowerCase
 *                                               function.
 */
