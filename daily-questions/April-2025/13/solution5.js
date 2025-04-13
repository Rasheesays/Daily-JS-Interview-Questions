// Interview Question 5: Flatten an Array

// Final Solution Code
function flattenArray(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
  }, []);
}

// Test the function
const arr = [1, [2, 3, [4, 5, [6, 7]]], 8, 9];
console.log(flattenArray(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * The function flattenArray uses recursion to traverse through the input array.
 * - The `reduce` method is used to accumulate the values into a single array.
 * - For each element in the array, we check if it is an array itself. If it is,
 *   we recursively call the flattenArray function to flatten the nested array.
 * - If the element is not an array, we simply concatenate it to the accumulator array.
 */

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Arrays: Arrays in JavaScript are objects that allow you to store multiple values.
 * - Recursion: A function calling itself to solve a smaller instance of the problem.
 * - The `concat()` method: Joins two or more arrays.
 * - The `Array.isArray()` method: Checks if the value is an array.
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Forgetting the base case in recursion could lead to an infinite loop.
 * - Not checking if an element is an array before calling `flattenArray` on it.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - MDN Arrays: [MDN Array Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
 * - MDN Recursion: [MDN Recursion Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#recursion)
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * An alternative approach would be to use a stack to iteratively flatten the array,
 * but recursion is more elegant and concise for this type of problem.
 */
