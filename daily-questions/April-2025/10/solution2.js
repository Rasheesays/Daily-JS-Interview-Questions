// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function findLargestNumber(arr) {
  return Math.max(...arr);
}

console.log(findLargestNumber([1, 5, 3, 9, 2])); // Output: 9

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * This function takes an array of numbers as input and uses the Math.max() method
 * to return the largest number in the array.
 *
 * The spread syntax (...) is used to pass the elements of the array as individual
 * arguments to the Math.max() function, which then returns the largest value.
 */

// Final Solution Code

function findLargestNumber(arr) {
  return Math.max(...arr);
}

// Test the function
console.log(findLargestNumber([1, 5, 3, 9, 2])); // Output: 9

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Arrays: Understanding how arrays store multiple values in a single data structure.
 * - Math.max(): A built-in JavaScript function used to find the largest number from a set of values.
 * - Spread syntax (...): Allows an iterable (like an array) to be expanded into individual elements.
 *
 * If you're unfamiliar with these concepts, check out these resources:
 * - Arrays in JavaScript: [MDN Array Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
 * - Math.max(): [MDN Math.max() Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
 * - Spread Syntax: [MDN Spread Syntax Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Passing a non-array argument: If you pass a non-array value to the Math.max() function,
 *   it will return NaN.
 *
 * Example mistake:
 * function findLargestNumber(arr) {
 *   return Math.max(arr); // Incorrect! This passes the entire array as a single argument.
 * }
 *
 * Correct approach:
 * function findLargestNumber(arr) {
 *   return Math.max(...arr); // Spread syntax ensures each element is passed as an individual argument.
 * }
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - MDN Arrays: [MDN Array Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
 * - MDN Math.max(): [MDN Math.max() Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
 * - MDN Spread Syntax: [MDN Spread Syntax Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * An alternative approach would be to manually loop through the array and compare values to find the largest one.
 */

function findLargestNumberAlternative(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargestNumberAlternative([1, 5, 3, 9, 2])); // Output: 9
