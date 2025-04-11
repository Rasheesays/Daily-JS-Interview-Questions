// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function flattenArray(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, [4]], 5]]));
// Output: [1, 2, 3, 4, 5]

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * This function uses the Array.prototype.flat() method with the depth set to Infinity.
 * The flat() method creates a new array with all sub-array elements concatenated into it
 * recursively up to the specified depth. By passing Infinity, we ensure it flattens all levels.
 */

// Final Solution Code

function flattenArray(arr) {
  return arr.flat(Infinity);
}

// Test the function
console.log(flattenArray([1, [2, [3, [4]], 5]]));
// Output: [1, 2, 3, 4, 5]

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Arrays: Understand nested arrays and multidimensional structures.
 * - flat(): A method used to flatten nested arrays up to a specified depth.
 *
 * Learn more:
 * - flat(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Not using the right depth: Using flat(1) or flat(2) may not flatten deeply nested arrays completely.
 * - Using flat() on non-array values will result in an error.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - MDN Array.prototype.flat(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * You can also implement a recursive approach manually to flatten an array:
 */

function flattenArrayRecursive(arr) {
  let result = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      result = result.concat(flattenArrayRecursive(element));
    } else {
      result.push(element);
    }
  }
  return result;
}

console.log(flattenArrayRecursive([1, [2, [3, [4]], 5]]));
// Output: [1, 2, 3, 4, 5]
