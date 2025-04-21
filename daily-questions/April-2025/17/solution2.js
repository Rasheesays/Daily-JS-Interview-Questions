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

// Expected Output:
// Start
// End
// Promise
// Timeout

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * Here's the step-by-step breakdown of what happens:
 *
 * 1. `console.log("Start")` runs immediately → outputs: "Start"
 * 2. `setTimeout(..., 0)` is a macro-task → scheduled to run after the current call stack is clear and all micro-tasks finish.
 * 3. `Promise.resolve().then(...)` is a micro-task → it will run immediately after the main synchronous code completes.
 * 4. `console.log("End")` runs immediately → outputs: "End"
 *
 * Now, the call stack is empty, so:
 * 5. All micro-tasks are executed → outputs: "Promise"
 * 6. Then macro-tasks are executed → outputs: "Timeout"
 *
 * Final Output:
 * Start
 * End
 * Promise
 * Timeout
 */

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - JavaScript is single-threaded and uses an event loop.
 * - The call stack runs all synchronous code first.
 * - Micro-tasks (like Promises) run right after synchronous code finishes.
 * - Macro-tasks (like setTimeout) run after micro-tasks.
 *
 * Concepts involved:
 * - Call Stack
 * - Event Loop
 * - Micro-tasks vs Macro-tasks
 * - Promise resolution timing
 * - setTimeout behavior
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Assuming setTimeout with 0 delay will run immediately — it won’t; it’s deferred as a macro-task.
 * - Forgetting that Promise callbacks are micro-tasks and thus run before setTimeout.
 * - Confusing execution order between sync, micro-tasks, and macro-tasks.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - Event Loop (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
 * - JavaScript Microtasks and Macrotasks: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
 * - Promise then() docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * You can experiment with `queueMicrotask` or `setImmediate` (Node.js) to see different timing behavior,
 * but the core principle remains: Micro-tasks always run before macro-tasks.
 */
