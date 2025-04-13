// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function countOwnProperties(obj) {
  return Object.keys(obj).length;
}

console.log(countOwnProperties({ a: 1, b: 2, c: 3 })); // Output: 3

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * The function `countOwnProperties` takes an object as input and returns
 * the number of its own enumerable string-keyed properties.
 *
 * We use `Object.keys(obj)` which returns an array of the object's own property names.
 * Then, we use `.length` to count how many keys are in the array.
 * This excludes any inherited properties.
 */

function countOwnProperties(obj) {
  return Object.keys(obj).length;
}

// Test
console.log(countOwnProperties({ a: 1, b: 2, c: 3 })); // Output: 3

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Objects: Key-value pairs used to store data.
 * - Object.keys(): A method that returns an array of a given object's own enumerable property names.
 * - Prototype chain: Inherited properties are not included in Object.keys().
 *
 * Learn more:
 * - Objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * - Object.keys(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Using `for...in` without checking `hasOwnProperty` may include inherited properties.
 *
 * Example mistake:
 * let count = 0;
 * for (let key in obj) {
 *   count++; // This will count inherited properties too!
 * }
 *
 * Safer:
 * for (let key in obj) {
 *   if (obj.hasOwnProperty(key)) count++;
 * }
 *
 * But better: Just use `Object.keys(obj).length` for accuracy and simplicity.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - Object.keys(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 * - JavaScript Objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * You could also count properties manually using `hasOwnProperty`:
 */

function countOwnPropsManually(obj) {
  let count = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) count++;
  }
  return count;
}

console.log(countOwnPropsManually({ a: 1, b: 2, c: 3 })); // Output: 3
