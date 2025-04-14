// ===============================
// ✅ Final Solution (Code Only)
// ===============================

// Using map()
const nums = [1, 2, 3];
const doubledWithMap = nums.map((num) => num * 2);
console.log(doubledWithMap); // Output: [2, 4, 6]

// Using forEach()
const doubledWithForEach = [];
nums.forEach((num) => doubledWithForEach.push(num * 2));
console.log(doubledWithForEach); // Output: [2, 4, 6]

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * `map()` and `forEach()` are both used to iterate over arrays in JavaScript.
 * The key difference is that `map()` returns a new array with the results,
 * while `forEach()` simply executes a function for each item and returns undefined.
 */

// Using map - returns a new array
const doubledMap = nums.map(function (num) {
  return num * 2;
});
console.log(doubledMap); // [2, 4, 6]

// Using forEach - modifies another array
const doubledForEach = [];
nums.forEach(function (num) {
  doubledForEach.push(num * 2);
});
console.log(doubledForEach); // [2, 4, 6]

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Array methods: map() and forEach()
 * - Callback functions
 * - Immutability: map() creates a new array; forEach() typically mutates external state
 *
 * Resources:
 * - map(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * - forEach(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Expecting `forEach()` to return an array — it doesn't.
 * - Using `map()` when you don’t care about the returned array (use `forEach()` instead).
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * In modern JavaScript, prefer `map()` when you want to transform data and use the result.
 * Use `forEach()` when you're only interested in performing side effects (e.g., logging, updating UI).
 */
