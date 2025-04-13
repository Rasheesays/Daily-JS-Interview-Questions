// =============================== 
// ✅ Final Solution (Code Only)
// ===============================

let a = 10;
let b = a;
a = 20;

console.log(b); // Output: 10

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * In JavaScript, primitive values like numbers are assigned by value, not by reference.
 * 
 * Here's what happens step-by-step:
 * 1. `a` is initialized with the value 10.
 * 2. `b` is assigned the value of `a`, so `b` becomes 10.
 * 3. `a` is then updated to 20, but this does not affect `b` because it already received its copy.
 * 
 * So `b` still holds the original value of 10.
 */

// Final Solution Code

// let a = 10;
// let b = a;
// a = 20;

// console.log(b); // Output: 10

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Primitive values in JavaScript: Numbers, strings, booleans, null, undefined, and symbols.
 * - Value vs Reference: Primitive types are copied by value, objects are copied by reference.
 * 
 * Helpful links:
 * - [MDN Primitive Types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
 * - [MDN Value vs Reference](https://developer.mozilla.org/en-US/docs/Glossary/Value)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================


