/**
 * Typescript Intro
 *
 * Hitesh Choudhary
 * https://www.youtube.com/watch?v=ZchBYjHFCC4
 */

let user = {name: "Ayan", age: 22};
/**
 * Gives an warning "cannot redeclare block-scope variable 'user'". This is a
 * typescript related error.
 */

console.log("Ayan")
console.log(user.name)
// run 'tsc intro.ts' to generate javascript file

export {}