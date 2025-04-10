// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function sumOfPositiveNumbers(arr) {
  return arr.filter((num) => num > 0).reduce((acc, num) => acc + num, 0);
}

console.log(sumOfPositiveNumbers([1, -4, 3, 2, -1, 5])); // Output: 11

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * This function takes an array of numbers as input and uses two array methods to find the sum of positive numbers.
 *
 * - `filter`: Filters the array to only include positive numbers (num > 0).
 * - `reduce`: Accumulates the sum of all positive numbers in the filtered array.
 *
 * The initial value for `reduce` is 0, ensuring that the sum starts at 0.
 */

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Arrays: Understanding how arrays store multiple values in a single data structure.
 * - Array Methods: Knowing how to use `filter` and `reduce` to manipulate and aggregate array data.
 * - Conditional Statements: Using conditions (like `num > 0`) to filter positive numbers.
 *
 * If you're unfamiliar with these concepts, check out these resources:
 * - Arrays in JavaScript: [MDN Array Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
 * - Array.filter(): [MDN filter() Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
 * - Array.reduce(): [MDN reduce() Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Not checking for positive numbers: Make sure to filter for positive numbers (num > 0) before summing them.
 *
 * Example mistake:
 * function sumOfPositiveNumbers(arr) {
 *   return arr.reduce((acc, num) => acc + num, 0); // This will sum all numbers, not just positive ones.
 * }
 *
 * Correct approach:
 * function sumOfPositiveNumbers(arr) {
 *   return arr.filter(num => num > 0).reduce((acc, num) => acc + num, 0); // Only positive numbers are summed.
 * }
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - MDN Arrays: [MDN Array Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
 * - MDN Array.filter(): [MDN filter() Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
 * - MDN Array.reduce(): [MDN reduce() Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * An alternative approach would be to loop through the array and add the positive numbers manually:
 */

function sumOfPositiveNumbersAlternative(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumOfPositiveNumbersAlternative([1, -4, 3, 2, -1, 5])); // Output: 11
