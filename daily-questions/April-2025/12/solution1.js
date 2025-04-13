// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

console.log(isObjectEmpty({})); // true
console.log(isObjectEmpty({ name: "Ali" })); // false

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * This function checks whether the object is empty by retrieving its keys
 * using Object.keys(), which returns an array of the object's own enumerable properties.
 *
 * If the length of that array is 0, then the object has no properties and is therefore empty.
 */

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// Test cases
console.log(isObjectEmpty({})); // true
console.log(isObjectEmpty({ name: "Ali" })); // false

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Objects in JavaScript
 * - Object.keys() method
 * - Array length property
 *
 * Resources:
 * - [Object.keys() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
 * - [Working with Objects - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Trying to check if an object is empty using `obj === {}` — this won't work.
 *   Each object is a unique reference in memory.
 *
 * Example mistake:
 * console.log({} === {}); // false
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - [MDN Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
 * - [MDN JavaScript Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * We can also use Object.entries() or Object.values() to check for an empty object.
 * They all return arrays, and checking the length is a valid method.
 */

function isObjectEmptyAlt(obj) {
  return Object.entries(obj).length === 0;
}

console.log(isObjectEmptyAlt({})); // true
console.log(isObjectEmptyAlt({ name: "Ali" })); // false
