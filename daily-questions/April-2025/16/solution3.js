// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function sortCharactersAlphabetically(str) {
  return str.split("").sort().join("");
}

console.log(sortCharactersAlphabetically("javascript")); // "aacijprstv"
console.log(sortCharactersAlphabetically("interview")); // "eeiinrtvw"

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * The function `sortCharactersAlphabetically` takes a string and returns a new string with
 * the characters sorted in alphabetical order.
 *
 * Steps:
 * 1. `str.split('')` converts the string into an array of characters.
 * 2. `.sort()` sorts the characters in ascending (alphabetical) order.
 * 3. `.join('')` converts the sorted array back into a string.
 */

// Final Solution Code

function sortCharactersAlphabetically(str) {
  return str.split("").sort().join("");
}

// Testing the function
console.log(sortCharactersAlphabetically("javascript")); // "aacijprstv"
console.log(sortCharactersAlphabetically("interview")); // "eeiinrtvw"

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - String.prototype.split(): Used to break a string into an array of characters.
 * - Array.prototype.sort(): Sorts elements alphabetically by default.
 * - Array.prototype.join(): Combines elements back into a string.
 *
 * Useful Resources:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Not using `split()` before `sort()` — you can’t sort a string directly.
 * - Forgetting to use `join('')` after sorting the array.
 * - Assuming it handles uppercase/lowercase automatically (capital letters are sorted before lowercase).
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - Array sort: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * - String split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 * - Array join: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * To ignore case when sorting (e.g., sort 'A' and 'a' equally), you can:
 */

function sortCharactersAlphabeticallyIgnoreCase(str) {
  return str.toLowerCase().split("").sort().join("");
}

console.log(sortCharactersAlphabeticallyIgnoreCase("JavaScript")); // "aacijprstv"
