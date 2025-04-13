// ===============================
// ✅ Final Solution (Code Only)
// ===============================

const colors = ["red", "blue"];
const [first, second, third = "green"] = colors;

console.log(first); // Output: red
console.log(second); // Output: blue
console.log(third); // Output: green

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * The given code uses array destructuring to assign values from the 'colors' array
 * to the variables 'first', 'second', and 'third'.
 *
 * - 'first' is assigned the value of the first element of the 'colors' array, which is "red".
 * - 'second' is assigned the value of the second element of the 'colors' array, which is "blue".
 * - 'third' is given a default value of "green", but it is not assigned any value from the array
 *   because the 'colors' array only has two elements. Therefore, 'third' takes the default value.
 */

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Array Destructuring: Allows you to unpack values from arrays into distinct variables.
 * - Default Values: When destructuring, you can assign default values in case the value
 *   at the specified position is undefined.
 *
 * If you're unfamiliar with these concepts, check out these resources:
 * - Array Destructuring: [MDN Array Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
 * - Default Values in Destructuring: [MDN Default Values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_values)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Not using default values when destructuring can lead to undefined variables.
 * - The position of elements in the array is crucial. If you try to destructure more
 *   elements than the array has, JavaScript will assign undefined to the remaining variables.
 *
 * Example mistake:
 * const [first, second, third] = ["red", "blue"];
 * console.log(third);  // Output: undefined (because 'third' has no corresponding value in the array)
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - MDN Array Destructuring: [MDN Array Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
 * - MDN Default Values: [MDN Default Values in Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_values)
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * An alternative way to assign a default value manually:
 *
 * const colors = ["red", "blue"];
 * let third = colors[2] !== undefined ? colors[2] : "green";
 *
 * console.log(third);  // Output: green
 */
