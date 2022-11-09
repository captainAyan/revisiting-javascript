/**
 * Typescript Functions
 *
 * Hitesh Choudhary
 * https://www.youtube.com/watch?v=ZchBYjHFCC4
 */

function addTwo(num: number): number {
  return num + 2;
}

console.log(addTwo(5)); // Output: 7

function getUpper(val: string) {
  return val.toUpperCase()
}

console.log(getUpper("test")) // Output: TEST

function signUpUser(name:string, email:string, isPaid: boolean):void {}
signUpUser("Ayan", "ayan@mail.com", false);

let loginUser = (name:string, email:string, isPaid: boolean = false):void => {}
loginUser("a", "a@b.com", false);


// never return
function fail(msg: string): never {
  throw new Error(msg);
}

export {}