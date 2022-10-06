/**
 * Class
 *
 * The Net Ninja
 * https://youtube.com/playlist?list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7
 */

/**
 * Classes are blue prints for creating objects.
 */

/**
 * Let's say that we need to create three user objects. The code will looks as
 * this,
 */
var userOne = {
  name: "user 1",
  age: 22,
  getDetails() {
    return `${this.name} is ${this.age} years old`;
  },
};

var userTwo = {
  name: "user 2",
  age: 33,
  getDetails() {
    return `${this.name} is ${this.age} years old`;
  },
};

var userThree = {
  name: "user 3",
  age: 44,
  getDetails() {
    return `${this.name} is ${this.age} years old`;
  },
};

/**
 * As we can see that this process of writing objects is rather cumbersome, hence
 * we have classes.
 *
 * Using a class, we can create classes from a template (blue print).
 *
 * Javascript classes, that were introduced in es6, are syntactic sugar on top of
 * the javascript prototype model. (prototype is explained in prototype.js file)
 */

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `${this.name} is ${this.age} years old`;
  }
}

/**
 * Now we can create objects easily by using the User constructor. The 'new'
 * keyword is used to create instances (or objects) of a class.
 *
 * The 'new' keyword,
 * - Creates a nwe empty object {}
 * - Sets the value of 'this' to be the new empty object
 * - Calls the constructor method
 */

var userOne = new User("user 1", 22);
var userTwo = new User("user 2", 33);
var userThree = new User("user 3", 44);

console.log(userOne.getDetails()); // Output: user 1 is 22 years old

/// Inheritance
/**
 * Inheritance is a mechanism in which one object acquires all the properties and
 * behaviors of a parent object.
 *
 * Inheritance represents the IS-A relationship which is also known as a
 * parent-child relationship. e.g. Cat IS A(an) Animal and Circle IS A Shape.
 *
 * Let's see how to use inheritance. We need to create an Admin class for admin
 * user. As we can see, that admins too are users, have some special methods (or
 * behaviors), i.e. admins can delete other users.
 */

class Admin extends User {
  constructor(name, age) {
    super(name, age); // <- super method is used to call parent's constructor
    this.isAdmin = true;
  }
  deleteUser(user) {
    users = users.filter((u) => u.name !== user.name);
  }
}

var users = [userOne, userTwo, userThree];
var admin = new Admin("admin 1", 55);

console.log(admin.getDetails()); // Output: admin 1 is 55 years old
admin.deleteUser(userTwo);
console.log(users); // Output only shows userOne and userThree

/**
 * If you console.log the admin object, you'd see the deleteUser method is inside
 * the __proto__ property. There is also another __proto__ property inside the
 * first-level __proto__ property, that has the getDetails method.
 */
