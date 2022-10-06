/**
 * Prototype (Checkout Class first)
 *
 * The Net Ninja
 * https://youtube.com/playlist?list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7
 *
 * The Coding Train
 * https://youtu.be/hS_WqkyUah8
 */

/**
 * Constructor Function classes are the es5 way of creating classes in javascript.
 *
 * Let's create a User class.
 */

function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;

  this.login = function () {
    console.log(this.email, "has logged in");
  };
}

//the 'new' keyword tells javascript to run the function as a constructor function
var userOne = new User("ryu@ninjas.com", "Ryu");
var userTwo = new User("yoshi@mariokorp.com", "Yoshi");

console.log(userOne);
// Output: User { email: 'ryu@ninjas.com', name: 'Ryu', online: false}

userTwo.login(); // Output: yoshi@mariokor.com has logged in

/**
 * If you console.log an object created using the User constructor function, you'd
 * see that unlike object instances of classes created using class keyword, the
 * methods are not in the __proto__ property. The methods are directly inside the
 * object.
 *
 * Let's add methods to the __proto__ object, but first what it a prototype?
 *
 * Prototype:
 * Prototype of a class stores it's methods, that can be used by it's instances.
 * The userOne and userTwo, needs their own properties, but the methods doesn't
 * need to be hardcoded into each instance individually, they can be stored in a
 * way so that they can be share but every instance. This can be optimized by
 * using Prototype.
 *
 * If we add the method to the prototype of User, the method will be accessible
 * to all the instances of User, and won't be replicated each time a object has
 * been instantiated.
 *
 * Let's write a new constructor function that uses prototypes.
 *
 */

function Car(company, model, year) {
  this.company = company;
  this.model = model;
  this.year = year;
}
Car.prototype.getFullName = function () {
  return `${this.company} ${this.model} ${this.year}`;
};

/**
 * Prototype property of constructor functions is used to defined prototype
 * methods. ('prototype' is a property of the constructor function, and __proto__
 * is a property of an object)
 */

const mustang = new Car("Ford", "Mustang", 2000);
console.log(mustang.getFullName()); // Output: Ford Mustang 2000

const scorpio = new Car("Mahindra", "Scorpio", 2020);

/**
 * Now if you console.log mustang, you'd see the getFullName method inside
 * __proto__.
 *
 * The mustang object has a prototype property, which is the Car prototype, and
 * that Car prototype has getFullName method
 *
 * mustang(Obj) -> prototype (Car Proto) -> getFullName (fn)
 * scorpio(Obj) -⭧
 */

/**
 * Bonus:
 * If you console.log -> [], you'd see a property [[Prototype]]: Array(0), which
 * tells us the the empty array is a prototype of Array class, therefore, it can
 * access methods of Array, such as map, filter etc.
 *
 * If you console.log -> {}, you'd see a property [[Prototype]]: Object, which
 * tells us the the empty object is a prototype of Object class, therefore, it
 * can access methods of Object, such as toString and valueOf etc.
 *
 */

/// Add my own methods to an existing prototype
/**
 * Array methods are stored in Array.prototype, so we need to add a method to the
 * Array.prototype object.
 */
var a = [1, 2, 3];

Array.prototype.getSecondElement = function () {
  return this[1];
};

console.log(a.getSecondElement()); // Output: 2

/// Prototypal Inheritance

// Lets write a User constructor function
function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}
User.prototype.login = function () {
  this.online = true;
  console.log(this.email, "has logged in");
};
User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, "has logged out");
};

// Now let's create Admin class that extends the User class
function Admin(...args) {
  User.apply(this, args);
  /**
   * Calling User constructor with environment (this) of Admin will make sure
   * that the 'this' keyword in User methods of an Admin object always refer to
   * the Admin instance.
   */
}

Admin.prototype = Object.create(User.prototype);
/**
 * If you console log an instance of Admin without writing the aforementioned, the
 * __proto__ of the instance will refer to Object not to User, and you'd be able
 * to access the methods of User.
 *
 * Admin is a prototype of User, and User is a prototype of Object. This is called
 * a prototype chain.
 */

Admin.prototype.deleteUser = function (u) {
  users = users.filter((user) => {
    return user.email != u.email;
  });
};

var userOne = new User("ryu@ninjas.com", "Ryu");
var userTwo = new User("yoshi@mariokorp.com", "Yoshi");
var admin = new Admin("shaun@ninjas.com", "Shaun");

var users = [userOne, userTwo, admin];
