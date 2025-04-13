// ===============================
// ✅ Final Solution (Code Only)
// ===============================

let x = 0;

async function incrementX() {
  x += await 2;
  console.log(x);
}

incrementX();
x += 1;
console.log(x);

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * This code demonstrates the asynchronous behavior of JavaScript using async/await.
 *
 * Here's the step-by-step breakdown:
 *
 * 1. Initially, the value of `x` is 0.
 * 2. The `incrementX()` function is called. Since it's an async function, it will execute asynchronously.
 *    - Inside the `incrementX()` function, `x += await 2;` is executed. The `await 2` expression resolves to 2,
 *      so `x` becomes 2. The `console.log(x)` inside the async function prints 2.
 * 3. After calling `incrementX()`, the synchronous code continues. The value of `x` is incremented by 1 (`x += 1`),
 *    so `x` becomes 3.
 * 4. The second `console.log(x)` prints 3.
 *
 * So the expected output is:
 * 2
 * 3
 */

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Async/Await: Understanding how async functions work and how the `await` keyword pauses execution
 *   until a promise is resolved.
 * - Synchronous vs Asynchronous: In this code, we see how synchronous code (x += 1) and asynchronous code
 *   (await 2) can interleave and impact the output.
 *
 * If you're unfamiliar with these concepts, check out these resources:
 * - MDN Async functions: [Async Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
 * - MDN Await: [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Not understanding the execution order of asynchronous code: While `incrementX()` is an async function,
 *   its execution still occurs asynchronously. This means the second console.log(x) can execute before the
 *   async function finishes its operation, leading to unexpected results.
 *
 * Example mistake:
 *
 * let x = 0;
 * async function incrementX() {
 *   x += await 2;
 *   console.log(x); // Expecting it to be 3 here but `x` was changed to 3 earlier synchronously.
 * }
 * incrementX();
 * console.log(x); // Incorrect order of output.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - MDN Async/Await: [MDN Async Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
 * - JavaScript Promises: [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * An alternative solution would be to avoid async/await and use simple promise handling with `then` to handle
 * the value.
 */

let y = 0;

function incrementY() {
  return new Promise((resolve) => {
    setTimeout(() => {
      y += 2;
      resolve(y);
    }, 1000);
  });
}

incrementY().then(() => {
  y += 1;
  console.log(y); // Output: 3
});

console.log(y); // Output: 0 (because `y` is updated asynchronously)
