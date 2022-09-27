/**
 * Array Methods
 *
 * Roadsidecoder
 * https://youtu.be/dGq0gi0wv64
 */

/// MAP
/**
 * Map method is used for creating a new array from using an existing one, by
 * applying a function to each elements of the existing array
 */
{
  const nums = [1, 2, 3, 4];
  const multiplyThree = nums.map((num) => num * 3);
  console.log(multiplyThree); // Output: [3, 6, 9, 12]
}

/// FILTER
/**
 * Filter method takes each element in an array and applies a condition statement
 * against it, if the statement returns true, the element gets pushed into the
 * output array, and the other way around
 *
 * Therefore, the output array consists of elements from the existing array that
 * fulfil the condition.
 */
{
  const nums = [1, 2, 3, 4];
  const moreThanTwo = nums.filter((num) => num > 2);
  console.log(moreThanTwo); // Output: [3, 4]
}

/// REDUCE
/**
 * Reduce method reduces and array of values down to just one value.
 *
 * Just like Map and Filter, Reduce also executes the callback for each element
 * of the array.
 *
 * Reduce method takes two arguments, i.e. a callback method, and an initial value
 *
 * The callback method is called with 4 parameters.
 * 1. previousValue/accumulator: initialValue or array[0] on the first call, and
 *                               after the first call, it holds the value of
 *                               previous computation
 * 2. currentValue: array[i] or Ith value
 * 3. Index: current index
 * 4. Array: the input array
 *
 */
{
  const nums = [1, 2, 3, 4];
  const sum = nums.reduce((acc, curr, index, array) => acc + curr, 0);
  console.log(sum); // Output: 10
}

/**
 * Map vs forEach
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

console.log(mapResult, forEachResult); // Output: [ 4, 7, 5, 6, 9 ] undefined */

/**
 * Therefore, map returns a new array, but forEach does not.
 *
 * ForEach is used to modify the array data
 */

arr.forEach((ar, i) => {
  arr[i] = ar + 3;
});

console.log(arr); // Output: [ 5, 8, 6, 7, 10 ]

/// Questions
let student = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

/**
 * Question 1: Return only name of students in Capital
 */
let q1 = student.map((stu) => stu.name.toUpperCase());
console.log(q1); // Output: ['PIYUSH', 'JENNY', 'KAUSHAL', 'DILPREET']

/**
 * Question 2: Return only details of those who scored more than 60
 */
let q2 = student.filter((stu) => stu.marks > 60);
console.log(q2); // Output: [{...}] (out put is too long)

/**
 * Question 3: Return only where marks more than 60 and rollNumber greater than 15
 */
let q3 = student.filter((stu) => stu.marks > 60 && stu.rollNumber > 15);
console.log(q3); // Output: [{ name: "Piyush", rollNumber: 31, marks: 80 }]

/**
 * Question 4: Sum of marks of all students
 */
let q4 = student.reduce((acc, cur) => acc + cur.marks, 0);
console.log(q4); // Output: 239

/**
 * Question 5: Return only names of students who scored more than 60
 */
let q5 = student.filter((stu) => stu.marks > 60).map((stu) => stu.name);
console.log(q5); // Output: [ 'Piyush', 'Jenny' ]

/**
 * Question 6: Return total marks for students with marks greater than 60 after
 *             20 marks have been added to those who scored less than 60
 */
let q6 = student
  .map((stu) => {
    stu.marks < 60 ? (stu.marks += 20) : null;
    return stu;
  })
  .filter((stu) => stu.marks > 60)
  .reduce((acc, cur) => acc + cur.marks, 0);

console.log(q6); // Output: 224
