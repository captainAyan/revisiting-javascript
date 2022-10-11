/**
 * Explicit Binding
 *
 * Roadside Coder
 * https://youtu.be/VkmUOktYDAU
 */

/**
 * Binding lets you define context for a function. Context is always the value
 * of the this keyword.
 *
 * Methods like call(), bind(), and apply() lets you bind context to a function,
 * and since using these methods we explicitly tell functions, which object to
 * bind to, it is called Explicit Binding.
 */

/// Questions (RoadsideCoder)

// Question 1: What is call()?

// Answer

// Setup
var obj = { name: "Piyush" };

function sayHello() {
  return `Hello ${this.name}`;
}

console.log(sayHello(obj)); // Output: Hello undefined

/**
 * Explanation:
 *
 * We can bind the function sayHello function to the 'obj' object, that way it'll
 * be access the 'obj' using 'this' keyword.
 *
 * You can call a the bind function to obj and call it at using .call() method.
 * Call() takes an object (the object to be used as the current object or 'this')
 * and the arguments for the function.
 *
 * You can bind the sayHello function to the obj object by using the call method.
 * The Call() method takes an object (the object to be used as the current object
 * or 'this') as the first argument, and the rest of the arguments are passed to
 * the function
 */

// Solution
console.log(sayHello.call(obj)); // Output: Hello Piyush

function greet(greeting) {
  return `${greeting} ${this.name}`;
}

console.log(greet.call(obj, "Bonjour")); // Output: Bonjour Piyush

// Question 2: What is apply()?
/**
 * Apply is similar to call but, it takes an array (containing the arguments) as
 * the second argument.
 */

// Using the functions and object from the last question
console.log(greet.apply(obj, ["Bonjour"])); // Output: Bonjour Piyush

// Question 3: What is bind()?
/**
 * Bind too is similar to call but, instead of running the function, it returns
 * the a function that binds to the provided object.
 *
 * You can call the returned function with arguments required by the original
 * function, or just pass the arguments after the context object in the bind
 * method.
 *
 * You can also pass some arguments using the bind method, and pass the rest when
 * calling the returned function.
 */

console.log(greet.bind(obj)("Hola")); // Output: Hola Piyush
console.log(greet.bind(obj, "Namaste")()); // Output: Namaste Piyush

function test(a, b, c) {
  return `${this.name} ${a} ${b} ${c}`;
}

console.log(test.bind(obj, "a")("b", "c")); // Output: Piyush a b c
console.log(test.bind(obj, "a", "b")("c")); // Output: Piyush a b c

// Question 4: What's the output
const person = { name: "Piyush" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

/*
console.log(sayHi.call(person, 24));
console.log(sayHi.bind(person, 24));
*/

/**
 * Explanation:
 * The Call function will call the function with 24 as the age parameter after
 * binding it to the person object.
 *
 * The Bind function will return a function after binding it to the person object
 * and passing 24 as the age parameter (You won't need to pass age argument when
 * calling the function)
 */

console.log(sayHi.call(person, 24)); // Output: Piyush is 24
console.log(sayHi.bind(person, 24)); // Output: [sayHi(age) {...}]

// Question 5: Call() with methods inside object

const age = 10;

var person1 = {
  name: "Piyush",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

var person2 = { age: 24 };
/*
console.log(person1.getAge.call(person2));
 */

/**
 * Explanation:
 *
 * The getAge method, without explicit binding to person2 object, would've used
 * person1 object as 'this'. But since it was explicitly bound, the getAge will
 * use person2 as 'this', and return 24.
 */
console.log(person1.getAge.call(person2)); // Output: 24

// Question 6: What is the output

var status = "😎";

setTimeout(() => {
  const status = "😍";

  const data = {
    status: "🥑",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus()); // Output: 🥑
  console.log(data.getStatus.call(this)); // Output: 😎 (works in browser)
}, 0);

/**
 * Explanation:
 *
 * First console.log was self explanatory.
 *
 * 'this' doesn't point to a function, instead it will point to the context of
 * a function.
 *
 * So, for the 2nd console.log, the call function binds getStatus to the 'this'
 * which is the global scope, and therefore the output is "😎", which is the
 * 'status' property of the global object.
 */

// Question 7: Call printAnimals such that it prints all animals in object

const animals = [
  { species: "Lion", name: "King" },
  { species: "Whale", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log(`#${i} ${this.species}: ${this.name}`);
  };
  this.print();
}

// Solution

/**
 * Explanation:
 *
 * The 'this' inside of the print() in is referring to the global object.
 *
 * So, should we just bind the printAnimal method with the animals array? No,
 * binding the whole array won't work as the 'this' in the function will refer
 * to an array (animals array), and the array doesn't have a property called
 * 'species' or 'name'.
 *
 * The solution is to use a for loop, to loop through the array, and bind the
 * function to each object (animal) and run the function. (Question asked us to
 * print all animals)
 */

animals.forEach((animal, i) => {
  printAnimals.call(animal, i);
});
/*
Output:
#0 Lion: King
#1 Whale: Queen
*/

// Question 8: Append an array to another array. (using call, bind, or apply)
// Solution

const arr0 = ["a", "b"];
const arr1 = [0, 1, 2];

arr0.push.apply(arr0, arr1);
console.log(arr0); // Output: ['a', 'b', 0, 1, 2]

/**
 * Explanation:
 *
 * The same result could've been achieved by using the following code,
 * > arr0.push(...arr1);
 *
 * But, the question required us to use the call, bind, or apply, so instead of
 * calling the push method directly, we can use apply() to call it.
 *
 * Using Call:
 * > arr0.push.call(arr0, ...arr1);
 *
 * Using Bind:
 * > arr0.push.bind(arr0, ...arr1)();
 */

// Question 9: Enhancing Built-in function. Find min/max number in an array
// Solution
const number = [5, 6, 2, 3, 7];
console.log(Math.max.apply({}, number)); // Output: 7
console.log(Math.min.apply({}, number)); // Output: 2

/**
 * Explanation:
 *
 * The same results could'be been achieved by using the following code,
 * > Math.max(...number);
 * > Math.min(...number);
 */

// Question 10: What's the output
function f() {
  console.log(this);
}

let user = {
  g: f.bind(null),
};
/*
user.g();
*/

/**
 * Explanation:
 *
 * The bind() method returns a new function, which is stored in g method of user.
 *
 * Therefore, when g is called, it logged null (if not in strict mode it'll
 * output global object)
 */

user.g(); // Output: null

// Question 11: What's the output (Bind Chaining)
function g() {
  console.log(this.name);
}

g = g.bind({ name: "John" }).bind({ name: "Ann" });
/*
g()
*/
/**
 * Explanation:
 *
 * Bind Chaining doesn't exist. A function that has been bound to a context,
 * cannot be rebound.
 */
g(); // Output: John

// Question 12: fix the line (mentioned later) to make code work properly

function checkPassword(success, failed, userInput) {
  // Prompt will only work in browser
  let password = userInput || prompt("Password?");
  if (password === "Roadside Coder") success();
  else failed();
}
let user1 = {
  name: "Piyush Agarwal",
  loginSuccessful() {
    console.log(`${this.name} logged in`);
  },
  loginFailed() {
    console.log(`${this.name} failed to log in`);
  },
};

/*
// Fix the following line,
checkPassword(user1.loginSuccessful, user1.loginFailed, "test");
*/

/**
 * Explanation:
 *
 * The methods of user1 doesn't have access to the user1 context when called from
 * checkPassword(), so it won't be able to find the 'this.name'. It can fixed by
 * binding the methods.
 */

checkPassword(
  user1.loginSuccessful.bind(user1),
  user1.loginFailed.bind(user1),
  "a"
); // Output: Piyush Agarwal failed to log in

checkPassword(
  user1.loginSuccessful.bind(user1),
  user1.loginFailed.bind(user1),
  "Roadside Coder"
); // Output: Piyush Agarwal logged in

// Question 13: [Modification of Question 12] How will you call the function

function checkPassword(ok, fail, userInput) {
  // Prompt will only work in browser
  let password = userInput || prompt("Password?");
  if (password === "Roadside Coder") ok();
  else fail();
}
const user2 = {
  name: "Piyush Agarwal",
  login(result) {
    console.log(`${this.name} ${result ? "login successful" : "login failed"}`);
  },
};

/*
// How will you call the checkPassword() function
checkPassword(?, ?);
*/

/**
 * Explanation:
 *
 * The user2.login() method takes a result boolean to print the message. The
 * checkPassword function only calls the "ok" callback or the "fail" callback.
 *
 * The only way to pass "result" argument to user2.login() method is by using the
 * .bind() method.
 */

checkPassword(
  user2.login.bind(user2, true),
  user2.login.bind(user2, false),
  "a"
); // Output: Piyush Agarwal login failed

checkPassword(
  user2.login.bind(user2, true),
  user2.login.bind(user2, false),
  "Roadside Coder"
); // Output: Piyush Agarwal login successful

// Question 14: Explicit binding with arrow function
/**
 * Answer: Didn't include the whole answer as we know that we can't bind an arrow
 * function.
 */

/// POLYFILL for .call()

let car = {
  color: "Red",
  company: "Ferrari",
};
function purchaseCar(currency, price) {
  console.log(
    `I have purchase ${this.color} - ${this.company} car for ${currency}${price}`
  );
}

purchaseCar.call(car, "Rs.", 5000000);
// Output: I have purchase Red - Ferrari car for Rs.5000000

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error(this + " is not callable");

  context.fn = this; // Adding "this" function to the given context
  context.fn(...args);
};
/**
 * Explanation:
 *
 * Firstly, we are adding our polyfill to Function prototype, so that it can be
 * accessed from any function.
 *
 * The function takes the context and the rest of the arguments are in an array.
 *
 * Then we check whether the function on which our myCall is being called is
 * actually a function.
 *
 * Finally, we create a new method in the context argument, and assign the 'this'
 * function to it, and then we call it using the array of extra arguments in the
 * args argument.
 */

purchaseCar.myCall(car, "Rs.", 5000000);
// Output: I have purchase Red - Ferrari car for Rs.5000000

/// POLYFILL for .apply()
let car2 = {
  color: "Yellow",
  company: "Lambo",
};
purchaseCar.apply(car2, ["Rs.", 5000000]);
// Output: I have purchase Yellow - Lambo car for Rs.5000000

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") throw new Error(this + " is not callable");
  if (!Array.isArray(args)) {
    throw new Error("CreateListFromArrayLike called on non-object");
  }

  context.fn = this;
  context.fn(...args);
};

/**
 * Explanation:
 *
 * Firstly, we are adding our polyfill to Function prototype, so that it can be
 * accessed from any function.
 *
 * The function takes the context and an array for the arguments of 'this'
 * function.
 *
 * Then we check whether the function on which our myCall is being called is
 * actually a function, and the given array is an actual array.
 *
 * Finally, we create a new method in the context argument, and assign the 'this'
 * function to it, and then we call it using the array of extra arguments in the
 * args argument.
 */

purchaseCar.myApply(car2, ["Rs.", 5000000]);
// Output: I have purchase Yellow - Lambo car for Rs.5000000

/// POLYFILL for .bind()

let car3 = {
  color: "Green",
  company: "Porsche",
};
purchaseCar.bind(car3, "Rs.", 5000000)();
// Output: I have purchase Green - Porsche car for Rs.5000000
purchaseCar.bind(car3, "Rs.")(5000000);
// Output: I have purchase Green - Porsche car for Rs.5000000
purchaseCar.bind(car3)("Rs.", 5000000);
// Output: I have purchase Green - Porsche car for Rs.5000000

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error(this + " is not callable");

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

purchaseCar.bind(car3, "Rs.", 5000000)();
// Output: I have purchase Green - Porsche car for Rs.5000000
purchaseCar.bind(car3, "Rs.")(5000000);
// Output: I have purchase Green - Porsche car for Rs.5000000
purchaseCar.bind(car3)("Rs.", 5000000);
// Output: I have purchase Green - Porsche car for Rs.5000000
