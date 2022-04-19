/**
 * Counting Sort
 *
 * programiz.com
 * https://www.programiz.com/dsa/counting-sort#:~:text=Counting%20sort%20is%20a%20sorting,index%20of%20the%20auxiliary%20array.
 *
 */

/**
 * Counting Sort is a simple sorting algorithm. It works by counting the
 * number of occurrences of each element in the array.
 * The Count of each element is stored and used to compute every item´s
 * index in the sorted array
 */

/**
 * Algorithm:
 * To sort an array of size n in ascending order
 * 1.Initialize a count array from 0 to n with values 0
 * 2.Iterate through the array and save every occurrence of each element in the count array
 * 3.Write each element in a new array matching the occurrences saved in count
 */

function countingSort(arr) {
  let sortedArray = [];
  let max = Math.max(...arr);
  let count = [];

  //initialization of count array from 0 to n
  for (let i = 0; i <= max; i++) {
    count[i] = 0;
  }

  //count occurrence of each element by iterating through the list
  for (let i = 0; i < arr.length; i++) {
    j = arr[i];
    count[j]++;
  }

  //write elements into new array
  let i = 0;
  for (let j = 0; j <= max; j++) {
    //iterate through count array
    if (count[j] > 0) {
      for (let k = 0; k < count[j]; k++) {
        //write element into sortedArray
        sortedArray[i] = j;
        i++;
      }
    }
  }
  return sortedArray;
}

let arr = [1, 0, 1, 2, 4, 6, 8, 2];
console.log(countingSort(arr)); //expected output:[0,1,1,2,2,4,6,8]
