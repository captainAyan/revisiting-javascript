/**
 * Typescript Variables
 *
 * Hitesh Choudhary
 * https://www.youtube.com/watch?v=ZchBYjHFCC4
 */

let greetings: string = "Hello Ayan";
console.log(greetings)

// greetings = 0; // <- error

/// Number
let userId: number = 334455;
let float: number = 3344.55;

// there is no difference in declaring an Int and a Float, both are numbers

/// Boolean
let isLoggedIn: boolean = false;

/**
 * A good practice by using inferred types. TypeScript will automatically infer
 * the type for a variable if a type annotation hasn't been specified.
 */
let someNumber: number = 2; // it is too obvious that the variable is a number

let anotherNumber: number;
anotherNumber = 3;
// in this case, explicitly mentioning the type makes sense.

/**
 * So, if we are declaring and defining a variable at the same time, you don't
 * need to explicity write the type.
 */

let firstNumber = 4; // ✅
let secondNumber:number; // ✅

/// Any
let hero;

function getHero() {
  return "thor"
}

hero = getHero();

/**
 * If we hover over 'hero', it'll tell us the is 'Any'. It's a bad practice to
 * have typescript infer a variable as 'Any' type. 'Any' is not a new data type,
 * it's just a way of telling typescript to not type check.
 */

export {}