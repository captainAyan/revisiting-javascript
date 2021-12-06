/**
 * **Insertion Sort
 *
 * W3Source
 *
 * https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-4.php
 *
 * Geeks For Geeks
 *
 * https://www.geeksforgeeks.org/insertion-sort/
 */

/**
 *  **Insertion Sort
 *
 * Insertion sort is a simple sorting algorithm that works similar to the way you
 * sort playing cards in your hands. The array is virtually split into a sorted and
 * an unsorted part. Values from the unsorted part are picked and placed at the
 * correct position in the sorted part.
 *
 */

/**
 * **Algorithm
 * To sort an array of size n in ascending order:
 * Step 1: Iterate from arr[1] to arr[n] over the array.
 * Step 2: Compare the current element (key) to its predecessor.
 * Step 3: If the key element is smaller than its predecessor, compare it to the elements
 * before. Move the greater elements one position up to make space for the swapped
 * element
 *
 */

function insertionSort(arr, n) {
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are 
         greater than key, to one position ahead 
         of their current position */
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

// Driver code
let arr = [12, 11, 13, 5, 6];
let n = arr.length;

insertionSort(arr, n);
console.log(arr); //Output:[ 5, 6, 11, 12, 13 ]
