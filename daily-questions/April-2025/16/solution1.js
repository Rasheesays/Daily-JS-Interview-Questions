// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function findFirstDuplicate(arr) {
  const seen = new Set();
  for (let num of arr) {
    if (seen.has(num)) return num;
    seen.add(num);
  }
  return null;
}

console.log(findFirstDuplicate([2, 5, 1, 2, 3, 5, 1, 2, 4])); // Output: 2
console.log(findFirstDuplicate([3, 1, 3, 4, 2])); // Output: 3
console.log(findFirstDuplicate([1, 2, 3, 4])); // Output: null

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * The goal is to return the first number that appears more than once in the array.
 *
 * We use a Set to keep track of numbers we've already seen.
 * Sets only store unique values, so it's ideal for checking duplicates.
 *
 * We loop through the array:
 * - If a number is already in the Set, it's a duplicate — return it.
 * - If not, we add it to the Set and continue.
 * - If we finish the loop with no duplicates, return null.
 */

// Final Solution Code (With Comment)

function findFirstDuplicate(arr) {
  const seen = new Set();
  for (let num of arr) {
    if (seen.has(num)) return num; // Found duplicate
    seen.add(num); // Mark as seen
  }
  return null; // No duplicates found
}

// Test the function
console.log(findFirstDuplicate([2, 5, 1, 2, 3, 5, 1, 2, 4])); // Output: 2
console.log(findFirstDuplicate([3, 1, 3, 4, 2])); // Output: 3
console.log(findFirstDuplicate([1, 2, 3, 4])); // Output: null

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Arrays and iteration using for...of loop.
 * - The Set object in JavaScript: useful for storing unique values.
 * - Understanding how to check for membership in a Set using `.has()`.
 * - When to return early in a loop.
 *
 * Useful Resources:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Forgetting to return early when a duplicate is found.
 * - Using an object instead of Set without understanding key coercion issues.
 * - Not handling the "no duplicates" case (forgetting to return null).
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * You can also solve it using an object instead of a Set:
 */

function findFirstDuplicateAlt(arr) {
  const seen = {};
  for (let num of arr) {
    if (seen[num]) return num;
    seen[num] = true;
  }
  return null;
}

console.log(findFirstDuplicateAlt([2, 5, 1, 2, 3, 5, 1, 2, 4])); // Output: 2
