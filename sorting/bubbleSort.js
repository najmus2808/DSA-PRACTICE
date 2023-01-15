// Read Documentation : https://www.geeksforgeeks.org/bubble-sort/
// Bubble Sort
// Follow the below steps to solve the problem:

// Run a nested for loop to traverse the input array using two variables i and j, such that 0 ≤ i < n-1 and 0 ≤ j < n-i-1
// If arr[j] is greater than arr[j+1] then swap these adjacent elements, else move on
// Print the sorted array
// Below is the implementation of the above approach:

// Time Complexity: O(N2)
// Space Complexity: O(1)
// #Less Optimize Solution (More Optimize Solution in bellow)

// function swap(arr, xp, yp) {
//   let temp = arr[xp];
//   arr[xp] = arr[yp];
//   arr[yp] = temp;
// }

// let count = 0; // count not a part of bubble sort it just checking how much iteration occurs
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//       count++;
//     }
//   }
//   console.log("count => ", count);
//   return arr;
// }

// console.log(bubbleSort([2, 6, 1, 8, 4]));
// console.log(bubbleSort([1, 2, 3, 4, 5]));
// console.log(bubbleSort([1, 2, 3, 5, 4])); // Almost sorted

// #More Optimize Solution
// Optimized Implementation of Bubble Sort:
// The above function always runs O(N2) time even if the array is sorted. It can be optimized by stopping the algorithm if the inner loop didn’t cause any swap.

// function bubbleSort(arr) {
//   let temp,
//     swapped,
//     count = 0; // count not a part of bubble sort it just checking how much iteration

//   for (i = 0; i < arr.length - 1; i++) {
//     swapped = false;
//     for (j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // swap arr[j] and arr[j+1]
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         swapped = true;
//       }
//       count++;
//     }

//     // IF no two elements were
//     // swapped by inner loop, then break
//     if (swapped == false) break;
//   }
//   console.log("count => ", count);
//   return arr;
// }

// console.log(bubbleSort([2, 6, 1, 8, 4]));
// console.log(bubbleSort([1, 2, 3, 4, 5]));
// console.log(bubbleSort([1, 2, 3, 5, 4])); // Almost sorted

// JavaScript code for recursive bubble sort algorithm
//Don't Panic about recursive sort if you not understand
// function bubbleSort(arr, n) {
//   if (n == 0 || n == 1) return;

//   var temp;
//   for (var i = 0; i < n - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//     }
//   }
//   bubbleSort(arr, n - 1);
//   return arr;
// }

// const arr = [2, 6, 1, 8, 4];
// console.log(bubbleSort(arr, arr.length));
