/**
 * Pure Functions
 *
 * Mosh's Redux Tutorial
 * https://youtu.be/poQXNp9ItL4?t=932
 */

// Basically, [Same args] -> [Same result]

// This function is impure
function fn0(number) {
  return number * Math.random();
}
// if you pass 1 into this function, the result can be anything.

// This function is pure
function fn1(number) {
  return number * 2;
}
// if you pass 1 into this function, the result can only be 2.
/**
 * Pure Functions :
 * 1. No random values.
 * 2. No current date/time.
 * 3. No global state (DOM, files, db etc.).
 * 4. No mutation of parameters.
 */

function isEligible(age) {
  return age > minAge;
}
/**
 * This function is impure as the result can change depending on the global
 * variable minAge.
 */

function isEligible(age, minAge) {
  return age > minAge;
}
/**
 * This function is pure as the result will be the same if same arguments are
 * passed.
 */

/**
 * Benefits of Pure functions :
 * 1. Self-documenting
 * 2. Easily testable
 * 3. Concurrency
 * 4. Cacheable
 */
