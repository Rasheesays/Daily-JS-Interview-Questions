// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function deepClone(obj) {
  // Check if the value is an object and not null
  if (obj === null || typeof obj !== "object") {
    return obj; // Return primitive values as they are
  }

  // Create an empty object or array based on the type of obj
  const clone = Array.isArray(obj) ? [] : {};

  // Loop through the properties and recursively copy them
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Recursively clone nested objects/arrays
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

// Example usage:
const originalObj = { a: 1, b: { c: 2 } };
const clonedObj = deepClone(originalObj);

console.log(clonedObj); // Output: { a: 1, b: { c: 2 } }

// Modifying the original object won't affect the clone:
originalObj.b.c = 3;
console.log(originalObj.b.c); // Output: 3
console.log(clonedObj.b.c); // Output: 2 (not affected)

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * The `deepClone` function works recursively. It checks if the value is an object (and not null),
 * then creates a new empty object or array. It then copies over each property of the original
 * object, checking if the value is an object and performing a recursive call for deep cloning nested objects.
 * If the value is not an object (i.e., a primitive value), it is directly returned.
 */

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Objects: Understanding how objects are structured and how to work with key-value pairs.
 * - Recursion: Recursion allows a function to call itself, which is used here to handle nested objects.
 * - Array.isArray(): A built-in JavaScript method used to determine if a value is an array.
 * - hasOwnProperty(): A method to check if an object has a property as its own (not inherited).
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Shallow cloning: If you use methods like `Object.assign()` or the spread operator, you'll only get a shallow clone.
 *   This means nested objects are still references to the original objects, not completely independent.
 *
 * Example mistake:
 * const shallowClone = { ...obj }; // This creates a shallow copy, so changes to nested properties will still affect the original.
 *
 * - Forgetting to handle arrays: Arrays and objects need to be treated similarly in deep cloning, but using `Array.isArray()` ensures you properly create an array when needed.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - MDN Objects: [MDN Object Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
 * - MDN Array.isArray(): [MDN Array.isArray() Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
 * - MDN hasOwnProperty(): [MDN hasOwnProperty() Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * Another solution can be using `JSON.parse()` and `JSON.stringify()`, which creates a deep clone by serializing the object
 * and then deserializing it into a new object.
 *
 * This method does have limitations, such as not being able to clone methods or non-JSON-safe objects (like `undefined`).
 */

function deepCloneUsingJSON(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const obj1 = { a: 1, b: { c: 2 } };
const clonedObj1 = deepCloneUsingJSON(obj1);
console.log(clonedObj1); // Output: { a: 1, b: { c: 2 } }
