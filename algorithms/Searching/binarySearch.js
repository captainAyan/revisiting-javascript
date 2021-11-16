/*
    Binary Search

    References:
    *Geeks for Geeks
    https://www.geeksforgeeks.org/binary-search/

    *MDN for Recursion
    https://developer.mozilla.org/en-US/docs/Glossary/Recursion
*/


/**
 *Binary Search:
 Binary Search: Search a sorted array by repeatedly dividing the search interval in half. 
 Begin with an interval covering the whole array. If the value of the search key is 
 less than the item in the middle of the interval, narrow the interval to the lower half.
 Otherwise, narrow it to the upper half. Repeatedly check until the value is found or the
 interval is empty. 
 */



//Recursive Implementation of Binary Search
function binarySearch(array,first,last,key) {
    //Base condition:It will only execute when all of the array is searched and the key
    //is not found
    if(first>last){
        return -1;
    }
    //Dividing the array into parts
    let mid=Math.floor((last+first)/2)


    //Comparing the middle element with the key
    if(array[mid]===key){
        return mid;
    }else if(array[mid]<key){
        //If element is greater than mid,then it can be only present in the other half
        //of the array as the array is sorted
        return binarySearch(array,mid+1,last,key)
    }else{
        //If element is less than mid,then it can be only present in the first half
        //of the array as the array is sorted
        return binarySearch(array,first,mid,key)
    }
}

//Iterative Implementation of Binary Search

function iterativeBinarySearch(array,key) {
    let start = 0;
    let end = array.length - 1;
  while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (array[mid] === key) {
        return mid;
      } else if (array[mid] < key) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  } 

const array=[1,2,3,4,5,6,7,8,9]//Declaring an array

let endIndex=array.length-1//Last index of array

let resultIndex=binarySearch(array,0,endIndex,8)//Function Call

if(resultIndex===-1){//Return check to see if the element is present or not
    console.log("Element not found!!!!")
}else{
    console.log("Element found at index:"+resultIndex)  //Element found at index:3
}


/**
 * Dry Run for the given example:
    The given array is [1,2,3,4,5,6,7,8,9]
    Note:Array is sorted

    The element given to find is 4
    
    *First Check
    In the first call the mid index will be 5 so the element will be 6
    As 6 is greater than 4 the element can only be present in first half

    *Second Check
    In the second call the mid index will be 3 so the element will be 4
    Thus the key is present at the middle index of this half it will return the index 3

 */
