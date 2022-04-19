// a is the array, l is left index, r is right index
function quickSort(a, l, r){
    if (a[0]<a[a.size-1]){
        // m is the return of partition
        //m is now at the correct position
        m = partition(arr, l, r);
        quickSort(arr, l, m-1);
        quickSort(arr, m+1, r);
    }
}

function partition(a, l, r){
    // pivot is the last number of a
    // m is in the beginning the first number
    var pivot = a[r];
    var m = a[l];
    // this loop exchanges the a[i] position with the a[m] position if i < pivot
    for (i=0; i<r; i++){
        if (a[i] < pivot){
            var help = a[i];
            a[i] = a[m];
            a[m] = help;
            m = m+1;
        }
    }
    // after the loop the position of m is exchanged with the last postion
    var help = a[m];
    a[m] = a[r];
    a[r] = help;
    // now m is at the correct position and returns
    return m;
}
var arr = [12, 11, 13, 5, 6, 7];
var arr_size = arr.length;

console.log("Given array is :", arr); // Output: Given array is : [ 12, 11, 13, 5, 6, 7 ]

quickSort(arr, 0, arr.length-1);

console.log("Sorted array is :", arr); // Output: Sorted array is : [ 5, 6, 7, 11, 12, 13 ]