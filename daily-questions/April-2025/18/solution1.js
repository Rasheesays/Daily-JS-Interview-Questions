// ===============================
// ✅ Final Solution (Code Only)
// ===============================

const sortedUsers = [...users].sort(
  (a, b) => new Date(b.lastLogin) - new Date(a.lastLogin)
);

console.log(sortedUsers);

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * The goal is to sort the list of user objects by their lastLogin timestamp,
 * with the most recent login appearing first in the array.
 *
 * Here's a breakdown of what we do:
 * 1. `new Date(timestamp)` is used to convert the ISO timestamp strings into Date objects.
 * 2. We use `Array.prototype.sort()` and compare two users `a` and `b` by subtracting
 *    their login dates to sort them in descending order.
 * 3. We use the spread operator (`[...users]`) to clone the original array,
 *    so we don’t mutate the original data.
 */

// Final Code:

const sortedUsers = [...users].sort(
  (a, b) => new Date(b.lastLogin) - new Date(a.lastLogin)
);
console.log(sortedUsers);

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Array.prototype.sort(): Used to sort arrays in-place. Can take a comparison function.
 * - The spread operator (`...`): Allows us to create a shallow copy of the original array.
 * - Date object: JavaScript Date constructor can parse ISO date strings.
 * - ISO date string: A standard format for representing date and time.
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Forgetting to convert string dates using `new Date()` can lead to incorrect comparisons.
 * - Sorting the original array without cloning it may mutate your input unintentionally.
 * - Not using descending order logic — subtracting b - a instead of a - b for most recent first.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - Date constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
 * - Array.prototype.sort(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * - Spread syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * If performance is not a major concern and mutation isn't an issue,
 * you can sort the original array directly:
 *
 * users.sort((a, b) => new Date(b.lastLogin) - new Date(a.lastLogin));
 *
 * This avoids the clone, but modifies the original array.
 */
