// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function removeDuplicatesWithSet(arr) {
  return [...new Set(arr)];
}

// Test the function
console.log(removeDuplicatesWithSet([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * A Set in JavaScript is a built-in object that stores unique values of any type.
 * It automatically removes duplicates when values are added.
 *
 * Here's how the code works:
 *
 * - `new Set(arr)` creates a new Set from the array `arr`, eliminating any duplicate values.
 * - `[...new Set(arr)]` spreads the Set back into a new array using the spread operator.
 *
 * This is a clean and efficient way to remove duplicates from an array.
 */

// Final Solution Code

function removeDuplicatesWithSet(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicatesWithSet([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Sets: Collections of unique values in JavaScript.
 * - Spread syntax (`...`): Used to convert the Set back into an array.
 * - Arrays vs Sets:
 *   - Arrays can contain duplicates, maintain insertion order.
 *   - Sets automatically remove duplicates and also maintain insertion order.
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Forgetting to convert the Set back into an array when a true array is required.
 * - Assuming Set modifies the original array — it does not; a new Set (and array) is created.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - JavaScript Set: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * - Spread Syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * Here's how you could remove duplicates without using a Set.
 * This approach uses `filter()` and `indexOf()`:
 */

function removeDuplicatesWithoutSet(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

console.log(removeDuplicatesWithoutSet([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
