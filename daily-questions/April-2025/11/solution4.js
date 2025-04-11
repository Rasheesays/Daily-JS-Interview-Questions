// ===============================
// ✅ Final Solution (Code Only)
// ===============================

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * In this code, we have a few asynchronous operations. The key to understanding
 * the output lies in how the JavaScript event loop handles synchronous and
 * asynchronous code.
 *
 * 1. The first `console.log('Start')` is synchronous and executes immediately.
 * 2. The `setTimeout()` function is asynchronous. Even though the delay is set to 0 milliseconds,
 *    it still gets placed in the event queue and waits for the call stack to be empty before executing.
 * 3. The `Promise.resolve()` immediately resolves and its `.then()` callback gets pushed
 *    to the microtask queue, which has higher priority over the event queue (which holds `setTimeout`).
 * 4. Finally, `console.log('End')` executes synchronously after the first `console.log('Start')`.
 *
 * The output order is:
 * 1. 'Start' (synchronous)
 * 2. 'End' (synchronous)
 * 3. 'Promise' (microtask queue, higher priority than event queue)
 * 4. 'Timeout' (event queue, lower priority)
 */

// Final Solution Code

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Event Loop: The mechanism that allows JavaScript to handle asynchronous operations.
 * - Microtask Queue: Holds promises, which are executed after the currently executing script
 *   and before any I/O tasks.
 * - Macrotask Queue: Holds tasks such as `setTimeout` and `setInterval`.
 *
 * When a promise is resolved, its `.then()` callback is placed in the microtask queue,
 * which is processed after the synchronous code finishes and before the macrotask queue (setTimeout).
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Misunderstanding the event loop: It is easy to assume that asynchronous operations like
 *   `setTimeout` will execute immediately, but they are processed later.
 *
 * Example mistake:
 *
 * setTimeout(() => {
 *   console.log('Hello');
 * }, 0);
 *
 * This will not print 'Hello' immediately. It will be pushed to the event queue and
 * will execute after the current synchronous code finishes.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - MDN Event Loop: [MDN Event Loop Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
 * - MDN setTimeout: [MDN setTimeout() Documentation](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
 * - MDN Promises: [MDN Promise Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * This problem does not have a different approach. The answer depends entirely on understanding
 * the event loop and the prioritization of the microtask queue over the macrotask queue.
 */
