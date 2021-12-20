/**
 * Iterators and Generators
 *
 * Web Dev Simplified
 * https://youtu.be/IJ6EgdiI_wU
 */

// Generators

function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

/**
 * The asterisk (*) is to denote that the function is an generator function
 *
 * The 'Yield' is a special 'return' keyword that is only useful inside a generator.
 *
 * The purpose of a generator is to -
 *    -> run code and return(yield) the value
 *    -> and then
 *    -> run some more code and return(yield) the value.
 */

const generatorObject = simpleGenerator(); // NOT called
// Only creates a Generator instance

const x = generatorObject.next();
/**
 * next() allows us to execute the generator function upto the next yield
 * (1st yield in this case)
 */

console.log(x); // Output: {value: 1, done: false}
/**
 * Value: value is the yielded (returned) value
 * Done: done is whether the generator is done executing
 */
console.log(generatorObject.next()); // Output: {value: 2, done: false}
console.log(generatorObject.next()); // Output: {value: 3, done: false}
console.log(generatorObject.next()); // Output: {value: undefined, done: true}

/**
 * function* simpleGenerator() {
 *
 *   (Code here is run on the 1st yield)
 *   yield 1;
 *
 *   (Code here is run on the 2st yield)
 *   yield 2;
 *
 *   (Code here is run on the 3st yield)
 *   yield 3;
 *
 *   (Code here is run on the 4st yield)
 * }
 */

// Iterator
function* simpleIterator(array) {
  for (let i = 0; i < array.length; i++) {
    yield array[i];
  }
}

const iteratorObject = simpleIterator([1, 3, 5]);
console.log(iteratorObject.next()); // Output: {value: 1, done: false}
console.log(iteratorObject.next()); // Output: {value: 3, done: false}
console.log(iteratorObject.next()); // Output: {value: 5, done: false}
console.log(iteratorObject.next()); // Output: {value: undefined, done: true}

// Advanced Features
/**
 * ⭐ next() can take an argument, which is then returned by the 'yield' statement
 *
 * ⛔ This doesn't work for the first yield
 */
function* generateId() {
  let id = 1;

  while (true) {
    const increment = yield id; // <- yield returns the value passed through next()
    if (increment != null) id += increment;
    else id++;
  }
}

const idGen = generateId();
console.log(idGen.next()); // Output: {value: 1, done: false}
console.log(idGen.next()); // Output: {value: 2, done: false}
console.log(idGen.next()); // Output: {value: 3, done: false}
// These values are incrementing by 1, which is the default increment

console.log(idGen.next(3)); // Output: {value: 6, done: false}
// Now, the value is incremented by 3, which was passed through next() method

// ⭐ return() is used to exit out of the generator prematurely
const _g = simpleGenerator();
console.log(_g.next()); // Output: {value: 1, done: false}
console.log(_g.return()); // Output: {value: undefined, done: true}

// ⭐ throw() is used to throw an error
const _h = simpleGenerator();
console.log(_h.next()); // Output: {value: 1, done: false}
console.log(_h.throw(new Error("Hi"))); // Error: Hi
