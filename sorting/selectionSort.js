// Read Documentation: https://www.geeksforgeeks.org/selection-sort/
// Selection Sort
// Follow the below steps to solve the problem:

// Initialize minimum value(min_idx) to location 0.
// Traverse the array to find the minimum element in the array.
// While traversing if any element smaller than min_idx is found then swap both the values.
// Then, increment min_idx to point to the next element.
// Repeat until the array is sorted.

// Javascript program for implementation of selection sort
// function swap(arr, xp, yp) {
//   [arr[xp], arr[yp]] = [arr[yp], arr[xp]];
//   //   var temp = arr[xp];
//   //   arr[xp] = arr[yp];
//   //   arr[yp] = temp;
// }

// function selectionSort(arr) {
//   let min_idx;

//   // One by one move boundary of unsorted subarray
//   for (let i = 0; i < arr.length - 1; i++) {
//     // Find the minimum element in unsorted array
//     min_idx = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min_idx]) {
//         min_idx = j;
//       }
//     }

//     // Swap the found minimum element with the first element
//     if (i !== min_idx) {
//       // If you want you can remove the if condition. But this condition reduce the swap function call when the array is sorted
//       swap(arr, min_idx, i);
//     }
//   }
//   return arr;
// }

// console.log(selectionSort([2, 4, 1, 3]));
// console.log(selectionSort([1, 2, 3, 4, 5, 6]));
