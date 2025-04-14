// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function test() {
  var a = 1;
  function inner() {
    console.log(a);
    var a = 2;
  }
  inner();
}

test(); // Output: undefined

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * Even though we might expect `1` to be logged because `a` is declared as `1` in the outer function,
 * JavaScript hoists variable declarations (but not their assignments) to the top of their scope.
 *
 * Inside the `inner` function, `var a = 2` is hoisted, which means:
 *   var a;              // declaration hoisted to the top
 *   console.log(a);     // a is declared but not yet initialized, so it is `undefined`
 *   a = 2;              // initialization happens here
 *
 * Therefore, the `console.log(a)` logs `undefined`.
 */

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Variable hoisting
 * - Function scope
 * - `var` declarations vs `let` and `const`
 *
 * Helpful resources:
 * - [MDN Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
 * - [MDN var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
 * - [JavaScript Scopes](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Assuming variables declared with `var` won't be hoisted
 * - Not understanding the difference between declaration and initialization
 * - Forgetting that inner functions have their own scope
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - [Understanding Hoisting in JS](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
 * - [Function Scope in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope)
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * Using `let` or `const` instead of `var` would result in a ReferenceError due to the Temporal Dead Zone (TDZ).
 *
 * Example:
 * function test() {
 *   let a = 1;
 *   function inner() {
 *     console.log(a); // ReferenceError: Cannot access 'a' before initialization
 *     let a = 2;
 *   }
 *   inner();
 * }
 */
