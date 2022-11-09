/**
 * Typescript Union
 *
 * Hitesh Choudhary
 * https://www.youtube.com/watch?v=ZchBYjHFCC4
 */

/**
 * Union types are used when a value can be more than a single type. Such as when
 * a property would be string or number.
 */

let score: number | string = 33;

score = 44;
score = "nil";

type User = {
  name: string;
  id: number;
}

type Admin = {
  username: string;
  id: number
}

let ayan: User | Admin = {name: "Ayan", id: 1}
ayan = {username: "abc", id: 2} // Now Ayan is an admin

/// Union narrowing

function getDbId(id: number | string) {
  // here id is a string | number
  if (typeof id === "string") { // this is called union narrowing
    id.toLowerCase(); // here id is a string
  }

  if (typeof id === "number") { // union narrowing
    id + 2; // here id is a number
  }

  console.log(`DB id is: ${id}`);
}
getDbId(3);
getDbId("3");

/// arrays with unions
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number)[] = [1, "2", 3];
const data4: Array<string | number> = ["1", 2, "3"];

/// other uses of union
let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
seatAllotment = "middle";
seatAllotment = "window";
// seatAllotment = "test"; // ❌ error

export {}
