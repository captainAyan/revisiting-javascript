/**
 * Data Types and Data Structures
 *
 * MDN Web Docs
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
 *
 * Guru99
 * https://www.guru99.com/difference-equality-strict-operator-javascript.html
 */

/**
 * Double equals (==) is a comparison operator, which transforms the operands
 * having the same type before comparison.
 */
console.log(1 == 1); // Output: true

console.log('hello' == 'hello'); // Output: true

console.log('1' ==  1); // Output: true

console.log(0 == false); // Output: true

/**
 * Triple equals (===) is a strict equality comparison operator in JavaScript,
 * which returns false for the values which are not of a similar type. This
 * operator performs type casting for equality. If we compare 2 with “2” using
 * ===, then it will return a false value.
 */
 console.log(1 === 1); // Output: true

 console.log('hello' === 'hello'); // Output: true

 console.log('1' ===  1); // Output: false

 console.log(0 === false); // Output: false