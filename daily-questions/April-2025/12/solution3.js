// ===============================
// ✅ Final Solution (Code Only)
// ===============================

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// Output after 1 second: 3, 3, 3

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * The variable `i` is declared with `var`, which has function scope (not block scope).
 * When the `setTimeout` callbacks are executed after 1 second, the loop has already
 * finished running, and `i` has been incremented to 3.
 *
 * All the callbacks reference the same `i`, which is now 3, so it prints 3 three times.
 */

// Actual Code
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - `var` vs `let`: `var` is function-scoped, `let` is block-scoped.
 * - Closures: The callbacks capture the same outer `i` variable.
 * - Asynchronous code: `setTimeout` runs after the loop finishes.
 *
 * Resources:
 * - Closures: [MDN Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
 * - var vs let: [MDN var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
 * - setTimeout: [MDN setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Assuming `setTimeout` runs immediately inside the loop — it doesn't.
 * - Not understanding how `var` is function scoped and why `i` ends up being 3.
 *
 * Incorrect assumption:
 * That each `setTimeout` "freezes" the value of `i` at that moment.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - [MDN JavaScript Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
 * - [MDN setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * ✅ Using `let` instead of `var` fixes the issue because `let` is block scoped.
 */

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // Output: 0, 1, 2
  }, 1000);
}
