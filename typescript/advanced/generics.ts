/**
 * Typescript Generics
 *
 * Hitesh Choudhary
 * https://www.youtube.com/watch?v=ZchBYjHFCC4
 */

const score: Array<number> = [];
/**
 * <number> tells Typescript that the elements of the array are going to be
 * numbers.
 */
const names: Array<string> = [];

function identity<Type>(val: Type): Type {
  return val;
}
/**
 * In this example we take the type of argument the function is going to take as
 * it's argument, via the angle bracket syntax, and that same type is returned
 * by the function
 */
console.log(identity<string>("hello world")); // Output: hello world


// generic with arrow function
const getMoreSearchProducts = <T,>(products: T[]): T => {
  //do some database operations
  const myIndex = 4
  return products[myIndex]
}

/// Generic Constraints
interface Database {
  connection: string,
  username: string,
  password: string
}
function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object {
  return{
      valOne,
      valTwo
  }
}
class MongoDB implements Database {
  constructor(
    public connection: string,
    public username: string,
    public password: string
  ) {}
}
const mdb = new MongoDB("localhost", "admin", "root");
console.log(anotherFunction<String, MongoDB>("Test", mdb));
/*
Output:
{
  valOne: 'Test',
  valTwo: {
    connection: 'localhost',
    username: 'admin',
    password: 'root'
  }
}
*/
