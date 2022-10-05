/**
 * Currying
 *
 * Mosh's Redux Tutorial
 * https://youtu.be/poQXNp9ItL4?t=932
 *
 * Roadside Coder
 * https://youtu.be/k5TC9i5HonI
 *
 * FreeCodeCamp
 * https://www.freecodecamp.org/news/how-to-use-partial-application-to-improve-your-javascript-code-5af9ad877833/
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
 * returns a function, which also take one argument (i.e. b) and returns the
 * addition of a and b.
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

/// Questions (RoadsideCoder)

// Question 1: Implement this function -> sum(2)(6)(1)
// Solution
const sum = (x) => (y) => (z) => x + y + z;
// Test
console.log(sum(2)(6)(1)); // Output: 9

/**
 * Question 2: Implement this function ->
 * evaluate("sum")(4)(2) => 6
 * evaluate("multiply")(4)(2) => 8
 * evaluate("divide")(4)(2) => 2
 * evaluate("subtract")(4)(2) => 2
 */

// Solution
const evaluate = (op) => {
  return (x) => (y) => {
    if (op === "sum") return x + y;
    if (op === "multiply") return x * y;
    if (op === "divide") return x / y;
    if (op === "subtract") return x - y;
  };
};

// Test
console.log(evaluate("sum")(4)(2)); // Output: 6
console.log(evaluate("multiply")(4)(2)); // Output: 8
console.log(evaluate("divide")(4)(2)); // Output: 2
console.log(evaluate("subtract")(4)(2)); // Output: 2

// Other uses
const mult = evaluate("multiply");
console.log(mult(10)(2)); // Output: 20

// Questions 3: Implement infinite currying -> sum(1)(2)...(n)()
// Solution

const infiniteSum = (a) => {
  return (b) => {
    if (b) return infiniteSum(a + b);
    else return a;
  };
};

// Sexier version of the above solution
const infiniteSum2 = (a) => (b) => b ? infiniteSum2(a + b) : a;

// Test
console.log(infiniteSum(2)(1)(2)(3)(4)(5)()); // Output: 17
console.log(infiniteSum2(2)(1)(2)(3)(4)(10)()); // Output: 22

/**
 * Explanation:
 *
 * The function (infiniteSum) takes in one argument and returns a closure.
 *
 * The closure too can take one argument.
 *
 * Inside the closure we check if an argument is passed or not. If an argument is
 * passed, the closure then calls the outer function itself with the sum of the
 * arguments of the outer function and the closure. This process is repeated for
 * all the number that are to be added.
 *
 * In the end the closure is called without any arguments. Therefore, the value
 * of the outer function (which is the sum of all the numbers at that point.) is
 * returned.
 *
 */

// Question 4: Currying vs Partial Application
/**
 * The number nested function a currying function has, depends on the number on
 * the argument the currying function receives. The following code is an example
 * of a currying function
 */
const sumOf3Numbers = (a) => (b) => (c) => a + b + c;
console.log(sumOf3Numbers(1)(2)(3)); // Output: 6

/**
 * According to FreeCodeCamp, Partial application starts with a function. We take
 * this function and create a new one with one or more of its arguments already
 * “set” or partially applied.
 *
 * Link to Article:
 * https://www.freecodecamp.org/news/how-to-use-partial-application-to-improve-your-javascript-code-5af9ad877833/
 *
 * Following code is an example of partial application
 */

// Example 1 (storing function for later execution, or partial application)
const createBase = (base) => (num) => num + base;

const addSix = createBase(6);
console.log(addSix(10)); // Output: 16
console.log(addSix(21)); // Output: 27

// Example 2 (unlike currying, function returned doesn't depend on arguments)
const _sumOf3Numbers = (a) => (b, c) => a + b + c;
console.log(_sumOf3Numbers(1)(2, 3)); // Output: 6

// Question 5: Real-life application of currying -> Manipulating DOM

// Solution (will only work in the browser)
try {
  const updateElementText = (id) => (content) =>
    (document.querySelector(`#${id}`).textContent = content);

  const updateHeader = updateElementText("heading");
  /**
   * The above function can be used to manipulate the text content of the header
   * multiple times.
   */
  updateHeader("Hello");
  updateHeader("Hi there");
} catch (e) {}

// Question 6: implement curry() that turns fn(a,b,c) into fn(a)(b)(c)

/**
 * We need to know this before starting to solve the problem. The 'length'
 * property on a function returns the number of argument that function takes.
 */
const a = (x, y, z) => x + y + z;
const b = (a, b, c, d) => false;
console.log(a.length); // Output: 3
console.log(b.length); // Output: 4

// Solution 1
function curry(fn) {
  const curriedFn = (...args) => {
    if (args.length === fn.length) {
      return fn(...args);
    } else {
      return (newArgs) => {
        return curriedFn(...args, newArgs);
      };
    }
  };
  return curriedFn;
}

// Solution 2
const curry2 =
  (fn) =>
  (...args) =>
    args.length === fn.length
      ? fn(...args)
      : (newArgs) => curry2(fn)(...args, newArgs);

/**
 * The curry2 implements a version of code that is a little different from the
 * solution 2 version. The following code is the descriptive version of the above
 * code.
 */
/*
function curry(fn) {
  return (...args) => {
    if (args.length === fn.length) {
      return fn(...args);
    } else {
      return (...newArgs) => {
        return curry(fn)(...args, ...newArgs);
      };
    }
  };
}
*/

// Test
const sum2 = (a, b, c, d) => a + b + c + d;
const currySum2 = curry(sum2);
const currySum3 = curry2(sum2);

console.log(currySum2(1)(2)(3)(4)); // Output: 10
console.log(currySum3(1)(2)(3)(4)); // Output: 10

/**
 * Explanation: (Solution 1)
 *
 * 😥 It's kinda difficult to explain, but the code is mostly self explanatory
 *
 * The curry function first takes in the actual function and returns curriedFn,
 * which is a closure.
 *
 * CurriedFn is the actual function (closure) that we call the first time we are
 * passing a parameter to the curried function.
 *
 * currySum2(1) <- this is calling the curriedFn closure.
 * currySum2(1)(2) <- NOT calling curriedFn
 *
 * After the first call to curriedFn closure, it returns an anonymous closure
 * that takes one argument and calls curriedFn with that argument + the argument
 * ("arguments" for calls after the 2nd curried argument) of first call to
 * curriedFn.
 *
 * The result of that curriedFn is then returned again, and this process continues
 * infinitely. 🤔 Well not exactly infinitely. We have previously discussed that
 * [the number arguments === the number of functions returned] in currying
 * functions. The CurriedFn function checks if the number of it's arguments are
 * of same amount as the main function's (Main function refers to the function
 * that is to be converted in to a curry function), if they are the same,
 * CurriedFn runs the main function with the arguments and returns the result,
 * otherwise it returns a closure that takes one argument (as discussed in the
 * above paragraph).
 */
