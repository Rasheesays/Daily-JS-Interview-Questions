// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function compareValues(a, b) {
  if (a == b && a === b) {
    return `${a} and ${b} are equal with both == and ===`;
  } else if (a == b) {
    return `${a} and ${b} are equal with == but not with ===`;
  } else {
    return `${a} and ${b} are not equal with either == or ===`;
  }
}

console.log(compareValues(5, "5")); // "5 and 5 are equal with == but not with ==="
console.log(compareValues(5, 5)); // "5 and 5 are equal with both == and ==="
console.log(compareValues(0, false)); // "0 and false are equal with == but not with ==="
console.log(compareValues(null, undefined)); // "null and undefined are equal with == but not with ==="

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * This function compares two values using both == and ===.
 *
 * - The `==` operator checks for value equality **with type coercion**.
 * - The `===` operator checks for both value **and type** equality.
 *
 * So:
 * - 5 == '5' → true (because '5' is coerced to a number)
 * - 5 === '5' → false (different types: number vs string)
 * - 5 === 5 → true (same value and type)
 * - 0 == false → true (false coerces to 0)
 * - 0 === false → false (number vs boolean)
 */

function compareValues(a, b) {
  if (a == b && a === b) {
    return `${a} and ${b} are equal with both == and ===`;
  } else if (a == b) {
    return `${a} and ${b} are equal with == but not with ===`;
  } else {
    return `${a} and ${b} are not equal with either == or ===`;
  }
}

console.log(compareValues(5, "5"));
console.log(compareValues(5, 5));
console.log(compareValues(0, false));
console.log(compareValues(null, undefined));

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Loose equality (`==`) vs Strict equality (`===`)
 * - Type coercion in JavaScript
 * - Primitive data types (number, string, boolean, null, undefined)
 * - Template literals for clean string formatting
 *
 * Resources:
 * - Equality Comparisons: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
 * - Type coercion: https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Confusing == and ===, especially in conditionals
 * - Assuming that == always behaves predictably without knowing coercion rules
 * - Forgetting that null == undefined is true, but null === undefined is false
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - MDN == vs ===: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
 * - JavaScript Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * We could also return all three results in an object instead of a message, if needed.
 */

function compareAllWays(a, b) {
  return {
    valueEquality: a == b,
    strictEquality: a === b,
    message: compareValues(a, b),
  };
}

console.log(compareAllWays(0, false));
