// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function hasProperty(obj, key) {
  return key in obj;
}

// Test the function
console.log(hasProperty({ name: "John", age: 30 }, "name")); // Output: true
console.log(hasProperty({ name: "John", age: 30 }, "address")); // Output: false

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * This function checks if the given object has the specified key.
 * The `in` operator is used to check if the key exists within the object.
 *
 * - The `key in obj` expression evaluates to true if the object has the specified property,
 *   and false if it does not.
 *
 * - This approach checks if the key exists in the object, regardless of whether it's in
 *   the object's prototype chain or directly on the object itself.
 */

// Final Solution Code

function hasProperty(obj, key) {
  return key in obj;
}

// Test the function
console.log(hasProperty({ name: "John", age: 30 }, "name")); // Output: true
console.log(hasProperty({ name: "John", age: 30 }, "address")); // Output: false

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - The `in` operator: Used to check if an object contains a specified property.
 * - Object properties: How to check if a property exists on an object.
 * - `key in obj`: Evaluates to true if the key exists in the object, including the prototype chain.
 *
 * Useful Resources:
 * - [MDN `in` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Confusing `in` with `hasOwnProperty()`. `in` checks for properties in both the object and its prototype chain,
 *   whereas `hasOwnProperty()` only checks for properties that belong directly to the object.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - Object.prototype.hasOwnProperty(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
 * - JavaScript `in` operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * You can also use `hasOwnProperty()` to check if the property exists directly on the object,
 * without considering the prototype chain.
 */

function hasOwnPropertyCheck(obj, key) {
  return obj.hasOwnProperty(key);
}

console.log(hasOwnPropertyCheck({ name: "John", age: 30 }, "name")); // Output: true
console.log(hasOwnPropertyCheck({ name: "John", age: 30 }, "address")); // Output: false
