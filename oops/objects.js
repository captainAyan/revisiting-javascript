/**
 * Objects
 *
 * Roadside Coder
 * https://youtu.be/XnFIX3c7xoI
 *
 * MDN Docs
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
 *
 * FreeCodeCamp
 * https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd
 */
/**
 * What is an Object?
 *
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
 *
 * JavaScript is designed on a simple object-based paradigm. An object is a
 * collection of properties, and a property is an association between a name (or
 * key) and a value. A property's value can be a function, in which case the
 * property is known as a method.
 */

// To ways of defining object
const car1 = Object();
car1.make = "Ford";
car1.model = "Mustang";
car1.year = 1969;

const car2 = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};

// Access property
console.log(car2.make); // Output: Ford
console.log(car2["make"]); // Output: Ford

// Delete property
delete car1.make;
console.log(car1); // Output: { model: 'Mustang', year: 1969 }

// Bonus: What will be the output of the following code
const func = ((a) => {
  delete a;
  return a;
})(5);

// Test
console.log(func); // Output: 5

/**
 * Explanation: The delete keyword deletes properties of objects, but not
 * variables. Here the parameter 'a' was a local variable, hence, cannot be
 * deleted.
 */

// Modify property
car1.year = 1970;
console.log(car1); // Output: { model: 'Mustang', year: 1970 }

// Add property
car2.test = 123;
console.log(car2); // Output: { make: 'Ford', model: 'Mustang', year: 1969, test: 123 }
car2["this is a property"] = "a";
console.log(car2["this is a property"]); // Output: a

// Dynamic key-value pairs
const key = "firstName";
const value = "John";
const user = {
  [key]: value, // we use the square brackets to use a variable as a property (key)
};
console.log(user); // Output: { firstName: 'John' }

// Loop thru object keys and print values
const user2 = {
  name: "John Doe",
  age: 20,
  isTotallyAwesome: true,
};

for (let key in user2) {
  console.log(key); // name, age, isTotallyAwesome
  console.log(user2[key]); // John Doe, 20, true
}

// Questions

// Question 1: What's the output?

const obj = {
  a: "one",
  b: "two",
  a: "three",
};

/**
 * Answer: The property 'a' is defined twice. The last definition will alter the
 * value that was previous defined for that property.
 *
 * Therefore, expected output is
 * { a: 'three', b: 'two' }
 */

// Test
console.log(obj); // Output: { a: 'three', b: 'two' }

/**
 * Question 2: Create a function multiplyByTwo(obj) that multiplies all numeric
 * property values of nums by 2
 */

// Solution
const multiplyByTwo = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "number") obj[key] *= 2;
  }
};

// Test
let nums = {
  a: 100,
  b: 200,
  title: "my nums",
};

multiplyByTwo(nums);
console.log(nums); // Output: { a: 200, b: 400, title: 'my nums' }

// Question 3: What's the output of the following code?

// Code
const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
a[c] = 456;

// Before solving, we need to know this
const xyz = { a: 1, b: 2 };

const xyzStringified = JSON.stringify(xyz); // Stringify
console.log(xyzStringified); // Output: {"a":1,"b":2} <- string

const xyzStringConversion = xyz + ""; // Convert
console.log(xyzStringConversion); // Output: [object Object] <- string

/**
 * Answer: When try to use 'b' as a key for 'a' object, javascript converts 'b'
 * into a string (javascript doesn't stringify the value, instead only converts
 * it to a string.). On converted 'b' appears as '[object Object]'. Same thing
 * happens on assigning property using 'c'.
 *
 * On 'a[c]', javascript again converts 'c' to '[object Object]', and since it
 * already exists in the 'a' object, the value is altered.
 *
 * So the 'a[b]' and 'a[c]' should return 456
 */

console.log(a); // Output: { '[object Object]': 456 }

// Test
console.log(a[b]); // Output: 456
console.log(a[c]); // Output: 456

// Question 4: What's JSON.stringify and JSON.parse?

// Answer
const obj2 = { a: 1, b: 2 };

const stringifyObj2 = JSON.stringify(obj2);
console.log(stringifyObj2); // Output: {"a":1,"b":2} <- string

const parsedObj2 = JSON.parse(stringifyObj2);
console.log(parsedObj2); // Output: { a: 1, b: 2 } <- object

// Question 5: What's the Output
[..."Lydia"];

// Answer: The spread operator will populate the array with character of "Lydia"
console.log([..."Lydia"]); // Output: [ 'L', 'y', 'd', 'i', 'a' ]

// Question 6: What's the output
const user3 = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user3 };

/**
 * Answer: The spread operator will add the properties of user3 to admin.
 */
console.log(admin); // Output: { admin: true, name: 'Lydia', age: 21 }

// Question 7: what's the output
const settings = {
  username: "Piyush",
  level: 19,
  health: 90,
};
const data = JSON.stringify(settings, ["level", "health"]);

/**
 * Answer: The 2nd parameter of JSON.stringify shows the keys that will be
 * stringify.
 */
console.log(data); // Output: {"level":19,"health":90}

// Question 8: What's the output
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

/**
 * Answer: An arrow function binds to the window object, there for the 'this'
 * keyword in an arrow function refers to the window.
 *
 * For the perimeter(), the arrow function uses this.radius, but since it doesn't
 * exist in the global scope, therefore the function returns NaN as it's result.
 */
console.log(shape.diameter()); // Output: 20
console.log(shape.perimeter()); // Output: NaN

// Question 9: What is destructuring in objects?

// Answer:
const user4 = { name: "John Doe", age: 30 };

// This is the usual way to assign properties to variables
const _name = user4.name;
console.log(_name); // Output: John Doe

const { name } = user4; // destructuring way of accessing variables
console.log(name); // Output: John Doe

// WARNING: The variables and the property must have the same name.

// Renaming destructured value
const { name: username } = user4; // renamed variable to 'username'
console.log(username); // Output: John Doe

// Nested destructuring
const user5 = { name: { first: "John", last: "Doe" }, age: 30 };
const {
  name: { first },
} = user5;
console.log(first); // Output: John

// Nested destructuring with renaming
const {
  name: { last: lastName },
} = user5;
console.log(lastName); // Output: Doe

// Question 10: what's the output
/*
Code:

function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit];
}
*/

/**
 * Answer: The function getItems won't run, as the rest operator is not used as
 * the last parameter.
 */

// Question 11: what's the output of 'q.greeting' in the following
let p = { greeting: "hey!" };
let q;

q = p;
p.greeting = "Hello";

/**
 * Answer: When assigning one object to a variable, the properties are not copies,
 * instead, a reference of that object is assigned to the variable.
 *
 * Therefore, output of 'q.greeting' will be "Hello"
 */
console.log(q.greeting); // Output: Hello

// Bonus ⭐⭐
p = { greeting: "Bonjour" };
console.log(q.greeting); // Output: Hello
/**
 * Explanation: Here, the value of 'p' is assigned to a new object, so 'p' and 'q'
 * no longer refers to the same object. That is why 'q.greeting' still prints
 * 'Hello'
 */

// Question 12: What's the output (Object Equality)
/*
console.log({ a: 1 } == { a: 1 });
console.log({ a: 1 } === { a: 1 });
*/
/**
 * Answer: When comparing objects using == or ===, the comparison evaluates to
 * true only if the compared values reference the same object instance. This is
 * the referential equality.
 *
 * Therefore, the output of both the log statements would be false.
 */

console.log({ a: 1 } == { a: 1 }); // Output: false
console.log({ a: 1 } === { a: 1 }); // Output: false

// Bonus: How to actually compare two objects
console.log(JSON.stringify({ a: 1 }) === JSON.stringify({ a: 1 })); // Output: true

// Question 14: What's the output
const value2 = { number: 10 };

const multiply = (x = { ...value2 }) => {
  return (x.number *= 2);
};

// what would be the output for the following calls to multiply()
/*
multiply();
multiply();
multiply(value2);
multiply(value2);
*/

/**
 * Answer: The multiply() function takes an argument which has a default value.
 * The default value of the argument is a clone of the value2 object.
 *
 * When multiply() is called without an argument, it takes the clone of value2
 * as it's parameter, assigns x2 to the value of 'number' property of the
 * parameter and returns the same.
 *
 * When called with an argument, the value of 'number' property is assigned to
 * it's x2, and returned.
 *
 * So, first two calls will return 20 ('number' property of value2 is 10, and the
 * property is not being reassigned, as the object is cloned)
 *
 * For the last two calls, the value of 'number' property is reassigned, as the
 * object reference is being passed. So the first output would be 20, and second
 * would be 40.
 */

console.log(multiply()); // Output: 20
console.log(multiply()); // Output: 20
console.log(multiply(value2)); // Output: 20
console.log(multiply(value2)); // Output: 40

// Question 15: What's the output
function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };
  return person;
}

const personObj1 = {
  name: "Alex",
  age: 30,
};

const personObj2 = changeAgeAndReference(personObj1);

// what would be the output for the following code
/*
console.log(personObj1);
console.log(personObj2);
*/

/**
 * Answer: The changeAgeAndReference() function assign the age property of the
 * object argument to 25.
 *
 * Then it assigns a new object to the object argument, and returns it.
 *
 * Therefore, the 'personObj1' will have an altered value age value, and the
 * 'personObj2' will have the returned value of changeAgeAndReference()
 */
console.log(personObj1); // Output: { name: 'Alex', age: 25 }
console.log(personObj2); // Output: { name: 'John', age: 50 }

/// Cloning or Copying Objects in Javascript
/**
 * According to FreeCodeCamp
 * Deep Copying: A deep copy means that all of the values of the new variable are
 * copied and disconnected from the original variable.
 *
 * Shallow Copying: A shallow copy means that certain (sub-)values are still
 * connected to the original variable.
 */

const g = {
  en: "Hello",
  de: "Hallo",
  es: "Hola",
  pt: "Olà",
};
let h = g; // SHALLOW COPYING
h.pt = "Oi";
console.log(h.pt); // Output: Oi
console.log(g.pt); // Output: Oi
/**
 * This is often times problematic, since we expect the old variable to have the
 * original values, not the changed ones.
 */

// Cloning using spread operator
var u = { greeting: "Hello", origin: { country: "England" } };
let r = { ...u }; // <- Copying the object
console.log(r); // Output: { greeting: 'Hello', origin: { country: 'England' } }
u.greeting = "Namaste";
console.log(r); // Output: { greeting: 'Hello', origin: { country: 'England' } }

u.origin.country = "Britain";
console.log(r); // Output: { greeting: 'Hello', origin: { country: 'Britain' } }
/**
 * Explanation: Spread operator creates shallow copy for NESTED objects.
 */

// Cloning using Object.assign
var u = { greeting: "Hello", origin: { country: "England" } };
let s = Object.assign({}, u); // <- Copying the object
console.log(s); // Output: { greeting: 'Hello', origin: { country: 'England' }  }
u.greeting = "Namaste";
console.log(s); // Output: { greeting: 'Hello', origin: { country: 'England' }  }

u.origin.country = "Britain";
console.log(s); // Output: { greeting: 'Hello', origin: { country: 'Britain' } }
/**
 * Explanation: Object.assign too creates shallow copy for NESTED objects.
 */

// Cloning using JSON
var u = { greeting: "Hello", origin: { country: "England" } };
let t = JSON.parse(JSON.stringify(u)); // <- Copying the object
console.log(t); // Output: Output: { greeting: 'Hello', origin: { country: 'England' }  }
u.greeting = "Hola";
console.log(t); // Output: Output: { greeting: 'Hello', origin: { country: 'England' }  }

u.origin.country = "Britain";
console.log(t); // Output: { greeting: 'Hello', origin: { country: 'England' } }
/**
 * Explanation: JSON.parse(JSON.stringify(object)) only does deep copy of the
 * nested objects as well.
 */

/**
 *
 * Table of different kinds of copying techniques.
 *
 * ===============================================================
 * |  Method         | Effective                                 |
 * |==============================================================
 * |  = operator     | Shallow Copy                              |
 * |--------------------------------------------------------------
 * |  ... operator   | Deep copy but shallow for nested objects  |
 * |--------------------------------------------------------------
 * |  Object.assign  | Deep copy but shallow for nested objects  |
 * |--------------------------------------------------------------
 * |  JSON           | Deep copy                                 |
 * ---------------------------------------------------------------
 */
