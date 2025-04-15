// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function findLongestString(arr) {
  return arr.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
}

console.log(findLongestString(["apple", "banana", "kiwi", "grapefruit"]));
// Output: "grapefruit"

console.log(findLongestString(["short", "medium", "longest", "long"]));
// Output: "longest"

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * This function finds the longest string in an array by using the reduce() method.
 * - reduce() iterates over each element and compares its length to the current longest string.
 * - If the current string's length is greater, it becomes the new longest string.
 * - The initial value for the comparison is an empty string.
 *
 * The result is the string with the maximum length.
 */

// Final Solution Code

function findLongestString(arr) {
  return arr.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
}

// Test the function
console.log(findLongestString(["apple", "banana", "kiwi", "grapefruit"]));
// Output: "grapefruit"

console.log(findLongestString(["short", "medium", "longest", "long"]));
// Output: "longest"

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Arrays: The concept of iterating over an array to perform a task on each element.
 * - Array.prototype.reduce(): A higher-order function that reduces an array to a single value.
 * - String length property: .length allows us to find the length of a string.
 *
 * Useful Resources:
 * - [MDN Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
 * - [MDN String.prototype.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Forgetting that reduce() requires an initial value.
 * - Not comparing the string lengths properly (always ensure you compare based on .length).
 * - Misunderstanding how reduce() works and incorrectly returning an array instead of a string.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - [MDN Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
 * - [MDN String.prototype.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * An alternative solution could be to use a simple for loop to compare the string lengths.
 */

function findLongestStringAlt(arr) {
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

console.log(findLongestStringAlt(["apple", "banana", "kiwi", "grapefruit"]));
// Output: "grapefruit"

console.log(findLongestStringAlt(["short", "medium", "longest", "long"]));
// Output: "longest"
