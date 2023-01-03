// ================== Search Algorithom Start ======================

// Linear Search Approach: A simple approach is to do a linear search. The time complexity of the Linear search is O(n). Another approach to perform the same task is using Binary Search.

// Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n).

// VN: 10.1 - start
// ======================
// ### Linear Search

// function searchEleIndex(array, searchElement) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === searchElement) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(searchEleIndex([1, 2, 3, 4, 5], 4));
// console.log(searchEleIndex([1, 2, 3, 4, 5], 10));

// VN: 10.1 - end
// ======================

// VN: 10.2 - start
// ======================

// Binary Search / Divide and Conquer
// ### Apply for only sorted array

// function searchEleIndex(array, searchElement) {
//   let low = 0;
//   let high = array.length - 1;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     let midValue = array[mid];
//     if (midValue === searchElement) {
//       return mid;
//     }
//     if (searchElement > midValue) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return -1;
// }

// console.log(searchEleIndex([1, 2, 3, 4, 5], 4));
// console.log(searchEleIndex([1, 2, 3, 4, 5], 1));
// console.log(searchEleIndex([1, 2, 3, 4, 5], 10));

// VN: 10.2 - end
// ======================

// VN: 10.3 - Theory

// VN: 10.4 - start
// ======================
// 35. Search Insert Position - (leet code 35) - Submitted
// Given a sorted array of distinct integers and a target value, return
// the index if the target is found. If not, return the index where it would
// be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// solution 1 by me :

// var searchInsert = function(nums, target) {
//     let index = nums.indexOf(target);
//     if (index === -1) {
//       const found = nums.find((element) => element === target - 1);
//       index = nums.indexOf(found) + 1;
//     }
//     return index;
//   };

// solution 2:

// var searchInsert = function (nums, target) {
//   let low = 0;
//   let high = nums.length - 1;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     let midValue = nums[mid];
//     if (midValue === target) {
//       return mid;
//     }
//     if (target > midValue) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return low;
// };

// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 2));
// console.log(searchInsert([1, 3, 5, 6], 7));
// console.log(searchInsert([1, 3, 5, 6], 0));

// VN: 10.4 - end
// ======================

// VN: 10.5 - start
// ======================
// 28. Find the Index of the First Occurrence in a String (leet code 28)
// > Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// if needle === "" return zero (0);

// Time Complexity : O(n * m)
// Space Complexity : O(1)

// var strStr = function (haystack, needle) {
//   if (needle === "") return 0;
//   for (let i = 0; i <= haystack.length - needle.length; i++) {
//     let j = 0;
//     for (; j < needle.length; j++) {
//       if (haystack[i + j] !== needle[j]) break;
//     }
//     if (j === needle.length) return i;
//   }
//   return -1;
// };

// console.log(strStr("sadbutsad", "sad"));
// console.log(strStr("leetcode", "leeto"));
// console.log(strStr("sakib", ""));

// VN: 10.5 - end
// ======================

// Week-4.1 Start

// VN: 11.1 - Start
// ======================
// ## Staircase Pattern
// > Write a function that accepts a positive number N.
// the function should console log a step shape with N levels
// using the # character. Make sure the step has spaces on the line
// right hand side.

// Example
// steps(2) - > '# '
//              '##'

// steps(3) - > '# '
//              '## '
//              '###'

// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let step = "";
//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 step += "#"
//             } else {
//                 step += ""
//             }
//         }
//         console.log(step);
//     }

// }

// steps(3);
// steps(5);
// steps(7);


// VN: 11.1 - end
// ======================

// VN: 11.2 - start
// ======================


// Not Doing

// VN: 11.2 - end
// ======================

// VN: 12.1 - Theory


// VN: 12.2 - start
// ======================
// Recursion
// > Print 10 to 1
// #iterative solution

// function countToZero(n) {
//     for (let i = n; i >= 0; i--) {
//         console.log(i);
//     }
// }

// countToZero(10)

// recursive solution
// function countToZero(n = 10) {
//     console.log(n);
//     if (n === 0) return;
//     countToZero(n - 1)
// }

// countToZero(10)

// > use default parameter cz if the argument is missing then the function call never stop. then call stack is full and throw an error.
// > must add return at the right place for stop the function;
// VN: 12.2 - end
// ======================