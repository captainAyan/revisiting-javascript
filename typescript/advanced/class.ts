/**
 * Typescript Classes
 *
 * Hitesh Choudhary
 * https://www.youtube.com/watch?v=ZchBYjHFCC4
 */

class User {

  private _courseCount = 0;

  email: string; // no modifier means field is Public
  name: string;
  readonly city: string = "Calcutta";
  private privateField = "test";
  constructor(email: string, name:string) {
    this.email = email;
    this.name = name;
  }

  get getAppleEmail(): string{
    return this.email;
  }

  get courseCount(): number {
    return this._courseCount;
  }
  set courseCount(courseNum) {
    if (courseNum <= 1) throw new Error("Course count should be more than 1");
    this._courseCount = courseNum;
  }

  private deleteToken() {
    console.log("Token deleted");
  }
}

const ayan = new User("ayan@mail.com", "ayan");

// ayan.test = "test" // ❌ cannot add a new field without altering the Class
// ayan.city = "Kolkata"; // ❌ readonly field
// ayan.privateField = "test"; // ❌ private field
// ayan.deleteToken(); // ❌ private method

console.log(ayan.getAppleEmail); // Output: ayan@mail.com

/// Quick way of writing the same User Class
class User2 {
  readonly city: string = "Calcutta";
  private privateField = "test";
  constructor(public email: string, public name:string) {}
}

/// Protected modifier
class User3 {
  /**
   * Public fields are accessible to children and users
   * Private fields are not accessible to either children or users
   *
   * Protected fields are accessible to children but not users
   */
  protected _courseCount = 1;

  constructor(public email: string, public name:string) {}
}
class SubUser extends User3 {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4
  }
}

export {}