/**
 * Typescript Objects
 *
 * Hitesh Choudhary
 * https://www.youtube.com/watch?v=ZchBYjHFCC4
 */

const User = {
  name: "ayan",
  email: "ayan@mail.com",
  isActive: true
}

function createUser({name: string, isPaid: boolean}): void {}
createUser({name: "ayan", isPaid: false});

function createCourse():{name: string, price: number} {
  return {
    name: "Java",
    price: 399
  }
}

// weird things about ts objects

// createUser({name: "ayan", isPaid: false, email: "test@mail.com"}); ❌

const x = {name: "ayan", isPaid: false, email: "test@mail.com"};
createUser(x); // ✅

/// Type aliases
type User = {
  name: string;
  email: string;
  isActive: boolean;
}

function createUseV2(user: User): User {return user}
createUseV2({name: "ayan", email: "ayan@mail.com", isActive: false})


type UserV2 = {
  readonly _id: string; // no one can change it now
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: CardDetails; // optional
}

type CardNumber = {
  cardNumber: string
}
type CardDate = {
  cardDate: string
}
type CardDetails = CardNumber & CardDate & {
  cvv: number
}

let myUser: UserV2 = {
  _id: "1234",
  name: "ayan",
  email: "test@mail.com",
  isActive: false,
}

myUser.email = "ayan@mail.com";
// myUser._id = "5678" // gives error

export {}