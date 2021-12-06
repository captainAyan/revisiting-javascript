/**
 * Selection Sort
 * 
 * Geeks For Geeks
 * 
 * https://www.geeksforgeeks.org/selection-sort/
 * 
 * Tutorialspoint
 * 
 * https://www.tutorialspoint.com/data_structures_algorithms/selection_sort_algorithm.htm
 */


/**
 * **Selection Sort
 * 
 * Selection sort is a simple sorting algorithm. This sorting algorithm is an 
 * in-place comparison-based algorithm in which the list is divided into two parts,
 * the sorted part at the left end and the unsorted part at the right end. 
 * Initially, the sorted part is empty and the unsorted part is the entire list.
 * The smallest element is selected from the unsorted array and swapped with the leftmost 
 * element, and that element becomes a part of the sorted array. This process
 * continues moving unsorted array boundary by one element to the right.
 * This algorithm is not suitable for large data sets as its average and worst case 
 * complexities are of Ο(n2), where n is the number of items
 */

/**
 *  **Algorithm
 * Step 1 − Set MIN to location 0
 * Step 2 − Search the minimum element in the list
 * Step 3 − Swap with value at location MIN
 * Step 4 − Increment MIN to point to next element
 * Step 5 − Repeat until list is sorted
 * 
 */

// Javascript program for implementation of selection sort
function swap(arr,xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
 
function selectionSort(arr,  n)
{
    var i, j, min_idx;
 
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;
 
        // Swap the found minimum element with the first element
        swap(arr,min_idx, i);
    }
}

 
var arr = [64, 25, 12, 22, 11];
    var n = 5;
    selectionSort(arr, n);
    console.log(arr);//Output:[ 11, 12, 22, 25, 64 ]