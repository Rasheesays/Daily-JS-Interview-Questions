// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

console.log(
  removeFalsyValues([
    0,
    "hello",
    false,
    42,
    "",
    null,
    "JavaScript",
    undefined,
    NaN,
  ])
);
// Output: ["hello", 42, "JavaScript"]

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * This function removes all falsy values from an array.
 * In JavaScript, the following are considered falsy: false, 0, "", null, undefined, and NaN.
 *
 * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 *
 * Passing Boolean as the callback to filter() automatically removes all falsy values because
 * Boolean(value) returns false for falsy values and true for truthy values.
 */

// Final Solution Code

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

// Test the function
console.log(
  removeFalsyValues([
    0,
    "hello",
    false,
    42,
    "",
    null,
    "JavaScript",
    undefined,
    NaN,
  ])
);
// Output: ["hello", 42, "JavaScript"]

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Falsy values in JavaScript: false, 0, "", null, undefined, NaN.
 * - Array.prototype.filter(): Allows you to create a new array with elements that pass a test.
 * - Boolean as a function: When used as a callback in filter, it acts as a shorthand for truthy checks.
 *
 * Useful Resources:
 * - [MDN filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
 * - [MDN Truthy and Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Forgetting that filter expects a function as an argument.
 * - Using `arr.filter(x => x !== false || x !== null || x !== 0)` and making the logic too complex.
 * - Not understanding that `Boolean` can be directly used to filter truthy values.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - Array.prototype.filter(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 * - JavaScript Boolean: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
 * - Falsy values in JavaScript: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * You can also use a custom callback instead of Boolean:
 */

function removeFalsyValuesAlt(arr) {
  return arr.filter(function (item) {
    return (
      item !== false &&
      item !== 0 &&
      item !== "" &&
      item !== null &&
      item !== undefined &&
      !Number.isNaN(item)
    );
  });
}

console.log(
  removeFalsyValuesAlt([
    0,
    "hello",
    false,
    42,
    "",
    null,
    "JavaScript",
    undefined,
    NaN,
  ])
);
// Output: ["hello", 42, "JavaScript"]
