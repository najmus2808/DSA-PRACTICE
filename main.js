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

// Complexity : O(1) - Constant
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

// Complexity : O(n) - linear
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

// Complexity : O(n^2) -> Quadratic
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

// Complexity : O(n * 2) -> O(2n) ->  remove constant (2) -> O(n)
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

// Complexity : O(n) + O(n) -> O(2n) -> O(n)
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

// Complexity : O(n^2) + O(n) -> O(n^2) -> just we need worst case -> O(n^2) is worst case than O(n).
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

// Complexity : if n <= 5 then O(1) otherwise O(n).
// =======================

// function logAtMost5(n) {
//   for (let i = 0; i <= Math.min(5, n); i++) {
//     console.log(i);
//   }
//

// logAtMost5(30);

// Complexity : O(1) -> because height iteration number = 5. -> always choose worst case
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

// Complexity : O(m + n) -> because of two inputs are difference and there values are difference
// if the argument value of a & b are same like log(10, 10) then the Complexity : O(n) + O(n) = O(2n) = O(n)

// =======================

// VN: 3.2 - end
