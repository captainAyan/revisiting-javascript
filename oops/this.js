/**
 * 'This' keyword
 *
 * Roadside Coder
 * https://youtu.be/rv7Q11KWmKU
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
