/**
 * Closure
 *
 * FireShip
 * https://www.youtube.com/watch?v=vKJpN5FAeF4&t=200s
 *
 * Web Dev Simplified
 * https://www.youtube.com/watch?v=3a0I8ICR1Vg
 *
 * Roadside Coder
 * https://youtu.be/sZjlEKbaykc
 *
 * MDN Docs
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 *
 * Geeks for Geeks
 * https://www.geeksforgeeks.org/lodash-_-once-method/
 *
 * Wikipedia
 * https://en.wikipedia.org/wiki/Memoization
 */

const _ = require("lodash");

/// Lexical Scope
/**
 * Lexical scope: A lexical scope in javascript means that a variable defined
 * outside a function can be accessible inside of that function after the
 * variable's declaration (But the opposite is not true)
 */

// -global scope-
let state = "🐶";

function callMe() {
  // -local scope-
  return `Hello ${state}`; // <- Accessing variable that is declared outside function
}

console.log(callMe()); // Output: Hello 🐶

/**
 * The variable 'state' is not declared inside the curly braces of the function
 * 'callMe', yet it can access that variable.
 */

// another example

var name = "RoadsideCoder";
function subscribe() {
  var name = "RoadsideCoder";
  // inner scope 2
  function displayName() {
    // This function is actually called a CLOSURE
    // inner scope
    console.log(name);
  }
  displayName();
}
subscribe(); // Output: RoadsideCoder

/// Closure
/**
 * Closure [MDN Docs]: A closure is the combination of a function bundled together
 * (enclosed) with references to its surrounding state (the lexical environment).
 *
 * In SHORT: A function inside a function is a closure
 *
 * That's all you need do know about closure. JK, 😆 not really.
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
 * Explanation:
 *
 * The outerFn is done being executed after calling outerFn("outside"). But then
 * how is it that the outerVar is still accessible to innerFn even though it
 * doesn't exist anymore, or does it, Hey, Vsauce Mi... (👁👄👁)
 *
 * Well it is true that outerVar has gone out of scope, but since javascript can
 * see that there is reference to this variable in the innerFn the, and it (JS)
 * is smart enough to keep track of that variable.
 *
 * This is done by combining the Lexical environment (surrounding state) and the
 * function (the closure function) together.
 *
 * In Javascript, every time we create a new function, it binds itself to it's
 * lexical environment.
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

/// Closure Scope Chain
/**
 * Every Closure haas three scopes
 * 1. Local Scope
 * 2. Enclosing Scope (block, function, or module scope)
 * 3. Global Scope
 *
 * A closure can access variables from it's local scope, it's parents' scope and
 * the Global scope.
 */

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}
console.log(sum(1)(2)(3)(4)); // Output: 20

/// Questions (RoadsideCoder)

// Question 1: What will be logged to console?
let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(count);
  }
  console.log(count);
})();
/**
 * Output:
 * 1
 * 0
 *
 * Explanation:
 *
 * The declaration of count inside the if condition is shadowing the count in
 * the global scope. Therefore, the console logs 1, which is the shadowed value
 * of count.
 *
 * Outside of the if block, javascript cannot find a 'count' variable so it refers
 * to the global context, and since the value of count in the global context is
 * 0, it prints 0 to the console.
 */

// Question 2: Write a function that would allow you to do this
/*
var addSix = createBase(6);
addSix(10); // Output: 16
addSix(21); // Output: 27
*/

// Solution 1
var createBase = function (base) {
  return function (num) {
    return num + base;
  };
};

// Solution 2
var createBase = (base) => (num) => num + base;

// Test
var addSix = createBase(6);
console.log(addSix(10)); // Output: 16
console.log(addSix(21)); // Output: 27

// Question 3: Time Optimization

// Given function
function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  console.log(a[index]);
}

// Tests
console.time("6");
find(6);
console.timeEnd("6"); // Time: ~43.59423828125 ms

console.time("12");
find(12);
console.timeEnd("12"); // Time: ~43.22900390625 ms

// Optimized function
const optimizedFind = () => {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return (index) => a[index];
};

// Testing
const optFind = optimizedFind();

console.time("6");
optFind(6);
console.timeEnd("6"); // Time: ~0.063232421875 ms

console.time("12");
optFind(12);
console.timeEnd("12"); // Time: ~0.0048828125 ms

/**
 * Explanation:
 *
 * The unoptimized find function would run the loop every time it is called. But
 * by using closure we can avoid that loop from being called every time. The array
 * a is bundled (enclosed) with the optFind method, and doesn't need to repopulate
 * it.
 */

// Question 4: What would be the output of this code.

function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
}

a();

/**
 * Explanation: [this question is already answered in the advancedScope file]
 */

// Question 5: How would you use a closure to create private counter?

// Solution
function counter() {
  /**
   * underscore before the name of variable means that the variable is private
   * (convention)
   */
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrieve() {
    return `Counter = ${_counter}`;
  }

  return {
    add,
    retrieve,
  };
}

const c = counter();

c.add(2);
console.log(c.retrieve()); // Output: Counter = 2

// but the private variable cannot be accessed
console.log(c._counter); // Output: undefined

// Question 6: What is Module Pattern?

// Solution
var Module = (function () {
  // privateMethod cannot be accessed from the outside
  function privateMethod() {
    console.log("from Private");
  }

  return {
    // publicMethod can be called from the outside
    publicMethod: function () {
      // can call privateMethod
      console.log("from Public");

      privateMethod();
    },
  };
})();

// Test

Module.publicMethod();
/**
 * Output:
 * from Private
 * from Public
 */

try {
  Module.privateMethod(); // Invokes an error (not a function)
} catch (e) {
  console.log(e); // TypeError: not a function
}

// Question 7: Make this run only once (Make a function run only once)

// Solution
function onlyOnce() {
  let called = false;

  return function () {
    if (called) return "Already Called";
    else {
      called = true;
      return "Function Called for the first time";
    }
  };
}

// Test
const once = onlyOnce();
console.log(once()); // Output: Function Called for the first time
console.log(once()); // Output: Already Called

/**
 * BONUS: These type of functions (that can be called once) can be implemented
 * using once method of lodash.
 */

// Example 1

// Calling once() method with its parameter
var hold = _.once(function (trap) {
  console.log(trap + "!");
});

// Calling hold multiple times
hold("Logged in to the console"); // Output: Logged in to the console
hold("GfG"); // NO OUTPUT
hold("CS"); // NO OUTPUT

// Example 2

// Calling once() method with its parameter
var fetch = _.once(function (value) {
  return value;
});

// Calling fetch multiple times
console.log(fetch(1000)); // Output: 1000
console.log(fetch(2000)); // Output: 1000
/**
 * In the example above, the second call to fetch returns the same value as the
 * first call. The call is cached, therefore the function doesn't run again, but
 * the cached result is still returned.
 */

// Question 8: Create a polyfill for the lodash.once() function
// Solution
function myOnce(fn, context) {
  // we can ignore the context parameter for now (check out explicit binding)

  let result;

  return function (...args) {
    if (fn) {
      result = fn.apply(context || this, args);
      // To know more about the apply method, check out explicit binding

      fn = null;
    }
    return result;
  };
}

/**
 * Explanation:
 *
 * myOnce has a result variable that holds the result (Result: returned value of
 * the function provided to be executed once). myOnce also returns a closure.
 *
 * In the closure, it checks if the provided function is not null, and if not, it
 * runs the function with the arguments provided to the closure, and stores the
 * result in the result variable and assigns null to to the function (so that
 * when the closure is called again, the execution is stopped by the if condition).
 * The result is returned.
 *
 * If the closure is called again, the if condition will find null as the provided
 * function, and will not run the function, and directly return the result value
 * of the previous execution.
 *
 */

// Testing
// Calling myOnce() method with its parameter
var fetch = myOnce(function (value) {
  return value;
});
var fetch2 = myOnce(function (value) {
  console.log(value);
});
// Calling fetch multiple times
console.log(fetch(1000)); // Output: 1000
console.log(fetch(2000)); // Output: 1000
// Calling fetch2 multiple times
fetch2("GfG"); // Output: Gfg
fetch2("CS"); // NO OUTPUT

// Question 9: Implement a caching/Memoize function
// Following is the example of a very time consuming code
const clumsyProduct = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {}

  return num1 * num2;
};

console.time("first call");
console.log(clumsyProduct(1234, 4321)); // Output: 5332114
console.timeEnd("first call"); // Time: ~141.330810546875 ms

console.time("second call");
console.log(clumsyProduct(1234, 4321)); // Output: 5332114
console.timeEnd("second call"); // Time: ~141.330810546875 ms

// Solution

// Memoize function
function myMemoize(fn, context) {
  // we can ignore the context parameter for now (check out explicit binding)

  const res = {};

  return function (...args) {
    var argsCache = JSON.stringify(args);

    // checking if the result for the current params are cached or not
    if (!res[argsCache]) {
      res[argsCache] = fn.apply(context || this, args);
      // To know more about the apply method, check out explicit binding
    }
    return res[argsCache];
  };
}

/**
 * Explanation:
 *
 * According to Wikipedia, In computing, memoization or memoisation is an
 * optimization technique used primarily to speed up computer programs by storing
 * the results of expensive function calls and returning the cached result when
 * the same inputs occur again.
 *
 * myMemoize has a results objects (res), that is a key-value pair of stringified
 * arguments (as keys) and the result of those arguments (as values).
 *
 * MEMOIZED FUNCTIONS MUST BE PURE.
 *
 * myMemoize takes a function (the function that is to be memoized), and returns
 * a closure.
 *
 * When the closure is called, it checks if the arguments provided to it are
 * already in the results key-value object (i.e. if the values are cached of not).
 * If the arguments are no in the results object, it runs the function, and stores
 * the result in the results object, and also returns that result. On the other
 * hand, if the arguments are in the the results object, it directly returns the
 * the cached result.
 *
 */

const memoizedClumsyProduct = myMemoize(clumsyProduct);

console.time("memoized first call");
console.log(memoizedClumsyProduct(1234, 4321)); // Output: 5332114
console.timeEnd("memoized first call"); // Time: ~168.9716796875 ms

console.time("memoized second call");
console.log(memoizedClumsyProduct(1234, 4321)); // Output: 5332114
console.timeEnd("memoized second call"); // Time: ~0.398193359375 ms
// As you can see that the second call was a lot faster than the first one

// Question 10: Difference between Closure and Scope
/**
 * Answer
 *
 * Closure: When we create a function inside of another function, the inner
 * function is called a closure. This closure is usually returned so that it can
 * use the outer function's variables.
 *
 * Scope: Scope defines which variable you have access to.
 */
