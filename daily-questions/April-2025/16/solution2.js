// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function groupStringsByLength(arr) {
  return arr.reduce((acc, str) => {
    const len = str.length;
    if (!acc[len]) {
      acc[len] = [];
    }
    acc[len].push(str);
    return acc;
  }, {});
}

console.log(groupStringsByLength(["hi", "hello", "hey", "yo", "sup", "yes"]));
// Output: { 2: ["hi", "yo"], 3: ["hey", "sup", "yes"], 5: ["hello"] }

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * This function groups strings in an array based on their length.
 *
 * We use the `reduce()` method to iterate through the array and build an object.
 * For each string:
 * - We get the string's length.
 * - We check if an array for that length already exists in the result object.
 * - If not, we create it.
 * - We push the string into the array for that length.
 */

function groupStringsByLength(arr) {
  return arr.reduce((acc, str) => {
    const len = str.length;

    // If no array exists for this length, create it
    if (!acc[len]) {
      acc[len] = [];
    }

    // Push the string into the appropriate array
    acc[len].push(str);

    return acc;
  }, {});
}

// Test the function
console.log(groupStringsByLength(["hi", "hello", "hey", "yo", "sup", "yes"]));

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Array.prototype.reduce(): Allows you to build a single output from an array.
 * - Object manipulation: Adding new keys dynamically based on conditions.
 * - String.length: Used to group strings.
 *
 * Useful Resources:
 * - [MDN reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
 * - [MDN Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Forgetting to initialize the accumulator as an empty object.
 * - Not checking whether a key already exists before pushing into it.
 * - Accidentally using string keys instead of numbers (though it's fine in JS, it can be confusing).
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * You could also use a for...of loop instead of reduce:
 */

function groupStringsByLengthAlt(arr) {
  const result = {};

  for (const str of arr) {
    const len = str.length;
    if (!result[len]) {
      result[len] = [];
    }
    result[len].push(str);
  }

  return result;
}

console.log(
  groupStringsByLengthAlt(["hi", "hello", "hey", "yo", "sup", "yes"])
);
