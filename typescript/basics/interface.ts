/**
 * Typescript Interfaces
 *
 * Hitesh Choudhary
 * https://www.youtube.com/watch?v=ZchBYjHFCC4
 */

interface User {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId?: string,
  // startTrial: () => string, // ✅ this way is also allowed
  startTrial(): string,

  getCoupon(couponName: string): number,
}

// Reopening interface (adding new fields)
interface User {
  githubToken: string
}

const a: User = {
  dbId: 1,
  email: "ayan@mail.com",
  userId: 101,
  startTrial: () => "trial started",

  // we can rename the parameters
  getCoupon: (name) => 10,

  githubToken: "github"
}

a.email = "a@g.com";
// a.dbId = 2 // ❌
console.log(a.getCoupon("")) // output: 10

// Inheritance
interface Admin extends User { // you can add multiple parents
  role: "admin" | "ta" | "learner"
}

const b: Admin = {
  dbId: 2,
  email: "admin@mail.com",
  userId: 102,
  startTrial: () => "not applicable",
  getCoupon: (name) => 10,
  githubToken: "github",
  role: "admin"
}

export {}