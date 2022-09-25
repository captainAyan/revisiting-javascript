/**
 * Loops
 *
 * Roadsidecoder
 * https://youtu.be/abbdJ4Yfm54?t=99
 */

/**
 * Question: Map vs forEach
 *
 * https://youtu.be/abbdJ4Yfm54?t=99
 */

const arr = [2, 5, 3, 4, 7];

const mapResult = arr.map((ar) => {
  return ar + 2;
});

const forEachResult = arr.forEach((ar) => {
  return ar + 2;
});

console.log(mapResult, forEachResult); // Output: [ 4, 7, 5, 6, 9 ] undefined

/**
 * Therefore, map returns a new array, but forEach does not.
 *
 * ForEach is used to modify the array data
 */

arr.forEach((ar, i) => {
  arr[i] = ar + 3;
});

console.log(arr); // Output: [ 5, 8, 6, 7, 10 ]
