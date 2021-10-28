/**
 * Function Composition
 *
 * Mosh's Redux Tutorial
 * https://youtu.be/poQXNp9ItL4?t=932
 */

// NON-Functional way :
let input = "  JavaScript  ";
let output = "<div>" + input.trim() + "</div>";
console.log(output); // Output: <div>JavaScript</div>

// Functional way :
const trim = (str) => str.trim(); // using 'const' as functions are not redefined
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input))); // this is called Function Composition
console.log(result); // Output: <div>JavaScript</div>
/**
 * This still a little hard to read
 * 1. too many parenthesis 😵
 * 2. reading is Right to Left 🏃‍♂️💨  🐕
 */

// Using lodash to solve these problems
import { compose, pipe } from "lodash/fp";

// pass reference of functions (don't call the functions)
const _transform = compose(wrapInDiv, toLowerCase, trim);
console.log(_transform(input)); // Output: <div>JavaScript</div>
/**
 * 'Compose' is a Higher Order function that takes multiple functions as argument
 * and returns new function which is a composition of the given functions.
 *
 * 🎉 This fixes our 1st problem (i.e. too many parenthesis). But the functions
 * are passed in reverse order of their execution.
 *
 * Explanation:
 * trim -> toLowerCase -> wrapInDiv (order of execution)
 *
 * compose(wrapInDiv, toLowerCase, trim);
 *                  <-           <-     (order of passing references)
 */

const transform = pipe(trim, toLowerCase, wrapInDiv);
console.log(transform(input)); // Output: <div>JavaScript</div>
/**
 * 'Pipe' is same as 'Compose' except the function references are passed in their
 * order of execution.
 *
 * Explanation:
 * trim -> toLowerCase -> wrapInDiv (order of execution)
 *
 * pipe(trim, toLowerCase, wrapInDiv);
 *                  ->           ->     (order of passing references == order of execution)
 */
