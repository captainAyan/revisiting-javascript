/**
 * 'This' keyword
 *
 * Roadside Coder
 * https://youtu.be/rv7Q11KWmKU
 *
 * Programming with Mosh
 * https://youtu.be/gvicrj31JOM
 */

/**
 * 'This' keyword is used to refer to something (it depends on the context).
 */

this.a = 5; // points to Global object
console.log(this.a); // Output: 5
console.log(this); // Output: { a: 5 }  <- global object

function getParam() {
  console.log(this.a);
}
getParam(); // Output: 5 (only if used in browser)

const getParamArrow = () => {
  console.log(this.a);
};
getParamArrow(); // Output: 5

/**
 * In a function inside of an object, the 'this' keyword refers to that object
 * itself, and it is used to access properties of the object.
 */

this.name = "John Doe";

let user = {
  name: "Ayan",
  age: 100,
  getDetails() {
    return `${this.name} is ${this.age} years old`;
    // 'this' refers to the user object
  },
  getDetailsArrow: () => {
    return `${this.name} is ${this.age} years old`;
    // 'this' refers to the Global object
  },
  childObj: {
    newName: "Captain Ayan",
    getDetails() {
      return `${this.name} is now ${this.newName}`;
      // 'this' refers to the childObj object
    },

    getDetailsArrow: () => {
      return `${this.name} is now ${this.newName}`;
      // 'this' refers to the global object
    },
  },

  _getDetails() {
    const nestedArrow = () => this.name;
    // For this arrow function, the parent scope is the user object
    return nestedArrow();
  },
};

// 'this' refers to the user object
console.log(user.getDetails()); // Output: Ayan is 100 years old

// 'this' refers to the childObj object (which is a nested object)
console.log(user.childObj.getDetails()); // Output: undefined is now Captain Ayan

// 'this' refers to the Global object
console.log(user.getDetailsArrow()); // Output: John Doe is undefined years old
/**
 * 'this' inside of an arrow function refers to the global object (or to the
 * parent)
 */

// 'this' refers to the Global object
console.log(user.childObj.getDetailsArrow()); // Output: John Doe is now undefined

// 'this' refers to use object (despite of being an arrow function)
console.log(user._getDetails()); // Output: Ayan

/**
 * Basic Thumb rule for this keyword in side functions
 *
 * Syntax:
 * Type of METHOD -> what THIS refers to
 *
 * Regular Method -> Object
 * Arrow Method -> Global (window) [Arrow functions should not be used as methods]
 *
 * Regular Function -> Global (window)
 *
 * Arrow Function -> Global (window)
 * Arrow Function inside a Method -> Object
 *
 * Constructor Function -> Object
 *
 * Callback Function (regular function) -> Global (window)
 * Callback Function (ARROW function) -> ?? 😵
 *
 * ⚠️ There can be exceptions, e.g. checkout question 6
 */

// 'this' inside a CALLBACK function
const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tags) {
      console.log(this.title, tags);
    });
  },
};

video.showTags();
/*
Output:
undefined 'a'
undefined 'b'
undefined 'c'
*/

/**
 * Explanation: The callback function binds to the global object, therefore, the
 * 'this' keyword doesn't refer to the video object.
 *
 * We can fix the issue by binding the callback function to the video object, or
 * by using an Arrow function as callback.
 */

// Fix 1: Binding 'this'
const video2 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tags) {
        console.log(this.title, tags);
      }.bind(this)
    );
  },
};

video2.showTags();
/*
Output:
a a
a b
a c
*/

// Fix 2: Using Arrow function as callback
const video3 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tags) => {
      console.log(this.title, tags);
    });
  },
};

video3.showTags();

/// Questions

// Question 1: What is the output
const user1 = {
  firstName: "Piyush!",
  getName() {
    const firstName = "Piyush Agarwal!";
    return this.firstName;
  },
};
/*
console.log(user1.getName());
*/

/**
 * Explanation: The 'this' keyword in user.getName method refers to the user
 * object. Therefore, the output will be 'Piyush!'
 *
 */
// Test
console.log(user1.getName()); // Output: Piyush!

// Question 2: What is the result of accessing it's ref? Why?
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user2 = makeUser();

/*
console.log(user2.ref.name);
 */

/**
 * Explanation: The ref property stores 'this'. 'this' in that context refers to
 * the window object (if in the browser, else it refers to the global context),
 * not to the object itself. The window object doesn't have any property called
 * 'name', therefore, there won't be any outputs (output will be undefined).
 */

console.log(user2.ref.name); // Output: undefined

// This can be fixed by turning the ref into a method
function makeUser2() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user3 = makeUser2();
console.log(user3.ref().name); // Output: John

// Question 3: what is the output

const user4 = {
  name: "Piyush!",
  logMessage() {
    console.log(this.name);
  },
};
/*
setTimeout(user4.logMessage, 1000);
 */

/**
 * Explanation: The 'this' in the method logMessage refers to the object if called
 * directly, but the setTimeout is taking the method as a callback, and then
 * running it after a delay. So the method gets copied inside of the setTimeout,
 * therefore logMessage won't have access to the user4 object.
 *
 * The 'this' inside the callback will refer to the window object.
 *
 * The result will be undefined, as the function won't be able to find a
 * 'this.name' when called.
 */
// Test
setTimeout(user4.logMessage, 1000); // Output: undefined

// This can be fixed by wrapping user4.logMessage in an anonymous function
setTimeout(() => {
  user4.logMessage();
}, 1000); // Output: Piyush!

// Question 4: What is the output

const user5 = {
  who: "Ayan",
  greet() {
    return `Hello ${this.who}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.who}!`;
  },
};

/*
console.log(user5.greet());
console.log(user5.farewell());
*/

/**
 * Explanation: As discussed in the fundamental/functions.js, the array method
 * binds to the global object. In this case, the 'this' keyword in farewell
 * method refers to the global object. (In browser the global object is the
 * window object)
 *
 * The output for the user5.greet method will be as expected, but for the
 * user5.farewell method, the 'this.name' part will not undefined.
 */

console.log(user5.greet()); // Output: Hello Ayan!
console.log(user5.farewell()); // Output: Goodbye, undefined!

/**
 * Can it be fixed by binding the farewell method to user5 object?
 *
 * Answer: No. Since the method (farewell) is an arrow function, you cannot rebind
 * the 'this'.
 */
// Test
console.log(user5.farewell.apply(user5)); // Output: Goodbye, undefined!
console.log(user5.farewell.bind({ who: "John" })()); // Output: Goodbye, undefined!

// but you can rebind the 'this' in a regular function
console.log(user5.greet.apply({ who: "John" })); // Output: Hello John!

// Question 5: create an object calculator that works as the following
/*
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
*/

// Solution:
let calculator = {
  read(a, b) {
    this.a = a || parseInt(prompt("a =", 0));
    this.b = b || parseInt(prompt("b =", 0));
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

// calculator.read(); // Only works in browsers

calculator.read(10, 20);
console.log(calculator.sum()); // Output: 30
console.log(calculator.mul()); // Output: 200

// Question 6: what is the output

var length = 4;
function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(fn) {
    fn();
  },
};

/*
object.method(callback);
*/

/**
 * Explanation: Unless otherwise, a callback function always binds to the global
 * object. This is why the output will be 4
 */

object.method(callback); // Output: 4

// Fix: Bind to 'this'
const object2 = {
  length: 5,
  method(fn) {
    fn.bind(this)();
  },
};
object2.method(callback); // Output: 5

/**
 * EXCEPTION of Callback functions binding to the global object.
 *
 * In the following case callback doesn't bind to the global object.
 */
const object3 = {
  length: 5,
  method(...args) {
    args[0]();
  },
};

object3.method(callback); // Output: 1
object3.method(callback, 2, 3); // Output: 3

/**
 * Explanation: Here, the callback is inside of an array, namely args. Arrays
 * have a property called 'length'. 'this' in callback refers to the args array.
 *
 * Therefore, callback function outputs the number of arguments provided to the
 * object3.method method.
 */

// Question 7: Implement calc such that the following code works
/*
const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total); // Output: 30
 */

// Solution
const calc = {
  total: 0,
  add(x) {
    this.total += x;
    return this;
  },
  multiply(x) {
    this.total *= x;
    return this;
  },
  subtract(x) {
    this.total -= x;
    return this;
  },
  divide(x) {
    this.total /= x;
    return this;
  },
};

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total); // Output: 30
