// count the characters in the
// input - string 'hello' output - {h: 1, e: 1, l:2, o:1}
// input - string 'greet' output - {g: 1, r: 1, e:2, t:1}

// Time Complexity: O(n)
// Space Complexity: O(n)

function countCharacter(str) {
  // creating an object for tracking the frequency of element
  const hasMap = {};
  // generalize the case
  const normalizeStr = str.toLowerCase();
  // looping the input
  for (let i = 0; i < normalizeStr.length; i++) {
    const char = normalizeStr[i];
    // if there is any space ignore it
    if (normalizeStr[i] === " ") continue;
    if (char in hasMap) {
      // check if the element exists on the object increment the existent count value
      hasMap[char] = hasMap[char] + 1;
    } else {
      // if element not present assign the value 1
      hasMap[char] = 1;
    }
  }
  return hasMap;
}

console.log(countCharacter("hello"));

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
