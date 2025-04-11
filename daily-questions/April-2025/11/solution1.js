// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function areAnagrams(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * This function checks if two strings are anagrams by:
 * 1. Splitting each string into an array of characters using split('').
 * 2. Sorting the arrays alphabetically using sort().
 * 3. Joining the sorted arrays back into strings with join('').
 * 4. Comparing the resulting strings for equality.
 */

function areAnagrams(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

// Test the function
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - String.prototype.split(): Converts a string to an array.
 * - Array.prototype.sort(): Sorts array elements alphabetically.
 * - Array.prototype.join(): Converts an array back to a string.
 * - Strict equality (===): Compares two strings for exact match.
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Not considering case sensitivity. For example, "Listen" vs "silent" would return false.
 *   You can normalize both strings using toLowerCase() if needed.
 *
 * - Not removing whitespaces or special characters, if comparing phrases like "school master" and "the classroom".
 *   You might want to clean the strings before comparison in such cases.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - MDN String.split(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 * - MDN Array.sort(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * - MDN Array.join(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * Another approach is to use character frequency counting instead of sorting.
 */

function areAnagramsAlt(str1, str2) {
  if (str1.length !== str2.length) return false;

  const count = {};

  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

console.log(areAnagramsAlt("listen", "silent")); // true
console.log(areAnagramsAlt("hello", "world")); // false
