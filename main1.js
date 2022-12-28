// ================== Search Algorithom Start ======================
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
// 35. Search Insert Position - (leet code 35)
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
