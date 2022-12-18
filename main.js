// ====================DATA STRUCTURE & ALGORITHOM NOTES=================

// ========TIME COMPLEXITY =========

// O(1) - যখন কোনো প্রোগ্রাম এর  ইনপুট (n) এর উপর অপারেশন সংখ্যা  নির্ভর করে না অর্থাৎ ইনপুট (n) এর মান যেটাই হোক না কেন অপারেশন সংখ্যা কনস্ট্যান্ট থাকে।

// O(n)- যখন কোনো প্রোগ্রাম এর  ইনপুট (n) এর সাথে অপারেশন সংখ্যা সমানুপাতিক বা লিনিয়ার  হার এ বৃদ্ধি পায়। সাধারণত সিঙ্গেল লুপ এর ক্ষেত্রে হয় এবং ওই লুপ  যদি (n) সংখ্যক বার চলে।

// O(n^2)- যখন কোনো প্রোগ্রাম এর  ইনপুট (n) এর সাথে অপারেশন সংখ্যা বর্গানুপাতিক  বা Quadrilateral  হার এ বৃদ্ধি পায়। সাধারণত ডাবল  লুপ এর ক্ষেত্রে হয় এবং ২ টি  লুপই   যদি (n) সংখ্যক বার চলে।

// O(n^3)- যখন কোনো প্রোগ্রাম এর  ইনপুট (n) এর সাথে অপারেশন সংখ্যা ৩ গুন  হার এ বৃদ্ধি পায়। সাধারণত ডাবল  লুপ এর ক্ষেত্রে হয় এবং ৩ টি  লুপই   যদি (n) সংখ্যক বার চলে।

// VN: 3.1 - start

// Worse case - Big(O)
// Bester case - (omega)
// Average case - (theta)
// How number of operation rate increases/relates with input

// =======================
// function addThreeTimes(n) {
//   return n + n + n;
// }

// addThreeTimes(20);

// Time Complexity : O(1) - Constant
// =======================

// =======================
// function counter(n) {
// let count = 0;
//   for (let i = 0; i < n; i++) {
//     count ++;
//   }
// return count;
// }

// console.log(counter(10));

// Time Complexity : O(n) - linear
// =======================

// =======================
// function counter(n) {
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(counter(10));

// Time Complexity : O(n^2) -> Quadratic
// =======================

// =======================
// function counter(n) {
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < 2; j++) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(counter(10));

// Time Complexity : O(n * 2) -> O(2n) ->  remove constant (2) -> O(n)
// =======================

// =======================
// function counter(n) {
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     count++;
//   }
//   for (let j = 0; j < n; j++) {
//     count++;
//   }
//   return count;
// }

// console.log(counter(10));

// Time Complexity : O(n) + O(n) -> O(2n) -> O(n)
// =======================

// =======================
// function counter(n) {
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       count++;
//     }
//   }
//   for (let k = 0; k < n; k++) {
//     count++;
//   }
//   return count;
// }

// console.log(counter(10));

// Time Complexity : O(n^2) + O(n) -> O(n^2) -> just we need worst case -> O(n^2) is worst case than O(n).
// =======================

// VN: 3.1 - end

// VN: 3.2 - start

// =======================

// function logAtLeast5(n) {
//   for (let i = 0; i <= Math.max(5, n); i++) {
//     console.log(i);
//   }
// }

// logAtLeast5(3);
// logAtLeast5(30);

// Time Complexity : if n <= 5 then O(1) otherwise O(n).
// =======================

// function logAtMost5(n) {
//   for (let i = 0; i <= Math.min(5, n); i++) {
//     console.log(i);
//   }
//

// logAtMost5(30);

// Time Complexity : O(1) -> because height iteration number = 5. -> always choose worst case
// =======================

// =======================

// function log(a, b) {
//   for (let i = 0; i < a; i++) {
//     console.log("first =>", i);
//   }

//   for (let j = 0; j < b; j++) {
//     console.log("second =>", j);
//   }
// }
// log(3, 5);
// log(10, 10);

// Time Complexity : O(m + n) -> because of two inputs are difference and there values are difference
// if the argument value of a & b are same like log(10, 10) then the Complexity : O(n) + O(n) = O(2n) = O(n)

// =======================

// VN: 3.2 - end

// ========SPACE COMPLEXITY =========

// VN: 3.3 - Code doesn't exit

// VN: 3.4 - start

// 1. Most primitives (booleans, number, undefined, null, char) are constant space.
// 2. String requires O(n) space (where n is the length of the string).
// 3. Reference types are generally O(n). Where n is the length of the array or the number of keys (for object).

// let number = 1000 -> O(1)

// let boolean = true; -> O(1)

// const str = "ldskfjlskdfjsdl" -> O(n)

// const array = [1, 2, 3, 4, 5, 6] -> O(n)

// const obj = {
//     name: "Sakib",
//     email: "najmus2808@gmail.com"
// } -> O(n)

// =======================

// function sum(array) {
//   let total = 0; // primitive data type
//   for (let i = 0; i < array.length; i++) {
//     total += array[i];
//   }
//   return total;
// }

// console.log(sum([1, 3, 5, 6, 7]));

// Space Complexity: O(1)

// =======================

// =======================

// function double(array) {
//   let newArray = []; // reference data type
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(2 * array[i]);
//   }
//   return newArray;
// }

// console.log(double([1, 3, 5, 6, 7]));

// Space Complexity: O(n)

// =======================

// VN: 3.4 - end

// VN: 4.1 - start

// Array and Object(performance)- Big(O)

// ===========Array============
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.length)

// access by index -> Time Complexity: O(1)
// console.log(arr[arr.length - 1])

// adding item/element at the end of the array -> Time Complexity: O(1)
// arr[arr.length] = 9;
// arr.push(10)

// removing element from end of the array -> Time Complexity: O(1)
// arr.pop()

// adding an element to the beginning of the array -> Time Complexity: O(n)
// arr.unshift(2);
// removing an element from the beginning of the array -> Time Complexity: O(n)
// arr.shift();

// finding/searching element from an array -> Time Complexity: O(n)
// for (let element of arr) {
//   if (element === 10) {
//     return true;
//   }
//   return false;
// }

// forEach, map, filter, reduce, slice, splice -> Time Complexity: O(n)
// =======================

// VN: 4.1 - end

// VN: 4.2 - start

// ===========Object============

// Remember there is no indexing like an array

// const person = {
//   name: "John",
//   email: "john@ex;ample.com",
// };

// adding element -> Time Complexity: O(1)
// person.profession = "programmer";

// delete element -> Time Complexity: O(1)
// delete person.profession;

// searching -> Time Complexity: O(1)
// console.log("emil" in person);

// searching -> Time Complexity: O(n)

// function search(searchKey) {
//   for (let key in person) {
//     if (key === searchKey) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// console.log(search("email"));

// ======================

// VN: 4.2 - end

// VN: 4.3 - start

// ======================

// When to use array
// -> when order is important
// -> when you need faster access (by index) or adding or removing (at the end not start)

// When to use object
// -> when order isn't important
// -> when you need faster access or remove
// Object.keys(person); -> Time Complexity: O(n)
// Object.values(person); -> Time Complexity: O(n)
// Object.entries(person); -> Time Complexity: O(n)

// ====================
// VN: 4.3 - end

// VN: 5.1 and 5.2 - start
// ===========================
// # Problem Solving approach

// ### 1. understanding the problem

// - restate the problem in own words
// - what are the input and outputs
// - Is there enough information to solve the problem
// - Thinking of labelling data (don't use random label like i, j, k, a, b)
// - checking the example with invalid, empty input

// ### 2.Note own the details like input, output

// ### 3. Start with the naive/brute force approach. First thing that comes into mind. It shows that you’re able to think well and critically (you don't need to write this code, just speak about it).

// ### 4. Tell them why this approach is not the best (i.e. O(n^2) or higher, not readable, etc...)

// ### 5. Walk through your approach, comment things and see where you may be able to break things.

// ### 6. Before you start coding, walk through your code and write down the steps you are going to follow

// ### 7. breakdown the steps and commenting is the ultimate key,Rundown of thinking process, steps. Breaking down the code will you give you the extra advantage

// ### 8.start coding (simplify as necessary)

// ### 9. can you write it better in terms of readability, time, space complexity?

// ### 10. If your interviewer is happy with the solution, the interview usually ends here. It is also Common that the interviewer asks you extension questions

// =========================
// VN: 5.1 and 5.2 - end

// VN: 5.3 - start
// ===========================
// count the characters in the
// input - string 'hello' output - {h: 1, e: 1, l:2, o:1}
// input - string 'greet' output - {g: 1, r: 1, e:2, t:1}

// Time Complexity: O(n)
// Space Complexity: O(n)

// function countCharacter(str) {
// creating an object for tracking the frequency of element
//   const hasMap = {};
// generalize the case
//   const normalizeStr = str.toLowerCase();
// looping the input
//   for (let i = 0; i < normalizeStr.length; i++) {
// const char = normalizeStr[i];
// if there is any space ignore it
// if (normalizeStr[i] === " ") continue;
// if (char in hasMap) {
// check if the element exists on the object increment the existent count value
//   hasMap[char] = hasMap[char] + 1;
// } else {
// if element not present assign the value 1
//       hasMap[char] = 1;
//     }
//   }
//   return hasMap;
// }

// console.log(countCharacter("hello"));

// 1st way
// if (char in hasMap) {
//     // check if the element exists on the object increment the existent count value
//     hasMap[char] = hasMap[char] + 1;
//   } else {
//     // if element not present assign the value 1
//     hasMap[char] = 1;
//   }

// 2nd way - more readable
// char in hasMap ? (hasMap[char] = hasMap[char] + 1) : (hasMap[char] = 1);

// 3rd way - most readable
// hasMap[char] = (hasMap[char] || 0) + 1;

// ===========================
// VN: 5.3 - end

// VN: 5.4 - start
// =============================

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

// ======================
// VN: 5.4 - end

// VN: 5.5 - start
// ======================

// Time Complexity: O(n + m)
// Space Complexity: O(n)

// function isElementExists(arr1, arr2) {
//   let exists = false;
//   const frequencyCounter = {};
//   for (let element of arr1) {
//     frequencyCounter[element] = true;
//   }

//   for (let element of arr2) {
//     if (element in frequencyCounter) {
//       exists = true;
//       break;
//     }
//   }
//   return exists;
// }

// console.log(isElementExists(["a", "b", "c"], [1, 2, 3, "d"]));

// VN: 5.5 - end
// ======================

// VN: 7.1 - start
// ======================
// Write a program that prints the number from 1 to 100.But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For number which are multiples of both three and five print "FizzBuzz".

// function fizzBuzz(num) {
//   let result = "";
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       result += "FizzBuzz \n";
//     } else if (i % 3 === 0) {
//       result += "Fizz \n";
//     } else if (i % 5 === 0) {
//       result += "Buzz \n";
//     } else {
//       result += i + " \n";
//     }
//   }
//   return result;
// }

// console.log(fizzBuzz(100));

// VN: 7.1 - end

// =======================

// VN: 7.2 - start
// =====================
// Find sum from an array

// function sum(array) {
//   let sum = 0;
//   for (let number of array) {
//     sum += number;
//   }
//   return sum;
// }

// console.log(sum([1, 2, 3]));

// Find min number from an array

// function min(array) {
//   let min = array[0];
//   for (let number of array) {
//     if (number < min) {
//       min = number;
//     }
//   }
//   return min;
// }

// console.log(min([1, 4, 5, -6]));

// Find max number form an array

// function max(array) {
//   let max = array[0];
//   for (let number of array) {
//     if (number > max) {
//       max = number;
//     }
//   }
//   return max;
// }

// console.log(max([1, 4, 5, -6]));

// Using Math.max and Math.min

// const array = [1, 2, 3, 4, 5, 6];
// console.log(Math.max(array)); -> Result - NAN
// Must use spread operator for break down the array
// console.log(Math.max(...array)); -> Result - 6
// console.log(Math.min(...array)); -> Result - 1

// Find Difference between max and min value form an array

// function findDifference(array) {
//   let min = array[0];
//   let max = array[0];
//   for (let number of array) {
//     if (number < min) {
//       min = number;
//     } else if (number > max) {
//       max = number;
//     }
//   }
//   return max - min;
// }

// console.log(findDifference([1, 2, 3, -6, 12]));

// VN: 7.2 - end
// ========================

// VN: 7.3 - start
// ========================
// Reverse a string
// 1st approach
// function reverseString(str) {
//   let revStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   return revStr;
// }

// console.log(reverseString("hello"));

// 2nd approach

// function reverseString(str) {
//   let revStr = "";
//   for (let char of str) {
//     revStr = char + revStr;
//   }
//   return revStr;
// }

// console.log(reverseString("hello"));

// 3rd approach

// console.log("hello".split("").reverse().join(""));

// ========================

// VN: 7.3 - end

// VN: 7.4 - start

// ========================

// Reverse Number

// function reverseNumber(num) {
//   let revNum = num.toString().split("").reverse().join("");
//   if (revNum.endsWith("-")) {
//     revNum = "-" + revNum.slice(0, revNum.length - 1);
//   }
//   return Number(revNum);
// }

// console.log(reverseNumber(-93));

// ======================
// VN: 7.4 - end
