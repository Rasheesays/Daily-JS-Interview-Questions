// ===============================
// ✅ Final Solution (Code Only)
// ===============================

let a = [1, 2, 3];
let b = [1, 2, 3];

console.log(a == b); // false
console.log(a === b); // false

// ===============================
// 🧠 Explanation (Code with Comments)
// ===============================

/*
 * In JavaScript, arrays are reference types.
 * This means that even if two arrays contain the same values,
 * they are stored in different memory locations.
 *
 * The equality operators (== and ===) check if both variables
 * refer to the exact same object in memory, not just if the content is the same.
 */

let a = [1, 2, 3];
let b = [1, 2, 3];

console.log(a == b); // false -> because they are different references
console.log(a === b); // false -> because they are still different references

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Reference Types in JavaScript: Objects and arrays are stored by reference.
 * - == vs ===: Both check for equality, but === also checks type.
 * - Comparing objects (including arrays): Only returns true if both point to the same reference.
 *
 * Helpful Resources:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * ❌ Assuming that two arrays with the same values are equal (they're not).
 * ❌ Forgetting that arrays are reference types and behave differently from primitives.
 * ❌ Thinking == might behave differently for arrays — it doesn’t in this context.
 */

// ===============================
// 💡 Alternative Way to Compare Arrays by Value
// ===============================

/*
 * If you want to compare arrays by their values, you need to
 * either stringify them or manually check each element.
 */

function arraysEqual(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((val, index) => val === arr2[index])
  );
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(arraysEqual([1, 2], [1, 2, 3])); // false
