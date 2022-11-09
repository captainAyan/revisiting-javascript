/**
 * Typescript Arrays
 *
 * Hitesh Choudhary
 * https://www.youtube.com/watch?v=ZchBYjHFCC4
 */

const superHeros: string[] = [];
superHeros.push("spider man");

const heroPower: Array<number> = [];

type User = {
  name: string;
  isActive: boolean;
}

const allUsers: User[] = [];

// allUsers.push("") // error
allUsers.push({
  name: "ayan",
  isActive: false
})

export {}