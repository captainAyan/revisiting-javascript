/**
 *  **Merge Sort
 *
 * Geeks For Geeks
 *
 * https://www.geeksforgeeks.org/merge-sort/
 *
 * Tutorials Point
 *
 * https://www.tutorialspoint.com/how-to-implement-merge-sort-in-javascript
 *
 */

/**
 *  **Merge Sort
 * Merge sort is the sorting technique that follows the divide and conquer approach.
 * Merge sort is similar to the quick sort algorithm as it uses the divide and conquer
 * approach to sort the elements.It divides the given list into two equal halves, calls itself for the two halves and then merges the two sorted halves. We have to define the merge() function to perform the merging.
 * The sub-lists are divided again and again into halves until the list cannot be
 * divided further. Then we combine the pair of one element lists into two-element
 * lists, sorting them in the process. The sorted two-element pairs is merged into
 * the four-element lists, and so on until we get the sorted list.
 *
 */

/**
 *
 *  **Algorithm
 *Step 1.Split the given list into two halves (roughly equal halves in case of a list with an odd number of elements).
 *Step 2.Continue dividing the subarrays in the same manner until you are left with only single element arrays.
 *Step 3.Starting with the single element arrays, merge the subarrays so that each merged subarray is sorted.
 *Step 4.Repeat step 3 unit with end up with a single sorted array.
 */

// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;

  // Create temp arrays
  var L = new Array(n1);
  var R = new Array(n2);

  // Copy data to temp arrays L[] and R[]
  for (var i = 0; i < n1; i++) L[i] = arr[l + i];
  for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  // Merge the temp arrays back into arr[l..r]

  // Initial index of first subarray
  var i = 0;

  // Initial index of second subarray
  var j = 0;

  // Initial index of merged subarray
  var k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of
  // L[], if there are any
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr, l, r) {
  if (l >= r) {
    return; //returns recursively
  }
  var m = l + parseInt((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

var arr = [12, 11, 13, 5, 6, 7];
var arr_size = arr.length;

console.log("Given array is :", arr); //Output : Given array is : [ 12, 11, 13, 5, 6, 7 ]

mergeSort(arr, 0, arr_size - 1);

console.log("Sorted array is :", arr); //Output: Sorted array is : [ 5, 6, 7, 11, 12, 13 ]
