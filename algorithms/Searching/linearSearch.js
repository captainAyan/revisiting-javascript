/**
 * Linear Search
 *
 * Geeks for Geeks
 * https://www.geeksforgeeks.org/linear-search/
 *
 * W3School
 * https://www.w3schools.in/data-structures-tutorial/searching-techniques/#What_is_Linear_Search
 *
 */

/**
 *
 *  **Linear Searcg
 * This is the simplest method for searching. In this technique of searching,
 * the element to be found in searching the elements to be found is searched sequentially
 * in the list. This method can be performed on a sorted or an unsorted list
 * (usually arrays). In case of a sorted list searching starts from 0th element and
 * continues until the element is found from the list or the element whose value
 * is greater than (assuming the list is sorted in ascending order), the value being
 * searched is reached
 */

//
// Javascript code to linearly search x in arr[]. If x
// is present then return its location, otherwise
// return -1

function search(arr, n, x) {
  let i;
  for (i = 0; i < n; i++) {
    //Checking if the element is present at index i.If found return i
    if (arr[i] == x) return i;
  }
  //If not found return -1
  return -1;
}

// Driver code

let arr = [2, 3, 4, 10, 40];
let x = 10;
let n = arr.length;

// Function call
let result = search(arr, n, x);
if (result === -1) {
  console.log("Element not found"); //Output:Element not found
} else {
  console.log(`Element found at index ${result}`); //Output:Element found at index 3
}

/**
 *
 *  **Dry Run
 * A simple approach is to do a linear search, i.e
 * Start from the leftmost element of arr[] and one by one compare x with each element
 * of arr[]
 * If x matches with an element, return the index.
 * If x doesn’t match with any of elements, return -1.
 */
