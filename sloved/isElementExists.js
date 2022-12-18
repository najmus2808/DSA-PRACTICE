// check the element of first array in 2nd array
// if element exists return true otherwise return false
// input array1-['a', 'b', 'c'] array2-[1, 2, 3, 'z'] // false
// input array1-['a', 'b', 'c'] array2-[1, 2, 3, 'c'] // true
// Time Complexity: O(n * m) -> because both array are difference

// function isElementExists(arr1, arr2) {
//   let exists = false;
//   for (let element of arr1) {
//     if (arr2.includes(element)) {
//       exists = true;
//       break;
//     }
//   }
//   return exists;
// }

// console.log(isElementExists(["a", "b", "c"], [1, 2, 3, "c"]));

// Time Complexity: O(n + m)
// Space Complexity: O(n)

function isElementExists(arr1, arr2) {
  let exists = false;
  const frequencyCounter = {};
  for (let element of arr1) {
    frequencyCounter[element] = true;
  }

  for (let element of arr2) {
    if (element in frequencyCounter) {
      exists = true;
      break;
    }
  }
  return exists;
}

console.log(isElementExists(["a", "b", "c"], [1, 2, 3, "d"]));
