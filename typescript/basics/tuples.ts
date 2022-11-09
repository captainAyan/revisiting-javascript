/**
 * Typescript Tuples
 *
 * Hitesh Choudhary
 * https://www.youtube.com/watch?v=ZchBYjHFCC4
 */

const user: (string | number)[] = [1, "hc"]

let tupleUser: [string, number, boolean]; // the order is important
tupleUser = ["ac", 123, false];
// tupleUser = ["ac", false, 123]; // error ❌

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];
const newUser: User = [112, "example@google.com"];
newUser.push("test"); // ⚠️⚠️ this is allowed
console.log(newUser); // output: [ 112, 'example@google.com', 'test' ]

export {}