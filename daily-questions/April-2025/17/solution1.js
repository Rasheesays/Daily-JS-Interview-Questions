// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function throttle(func, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Usage Example:
const throttledLog = throttle(() => console.log("Hello!"), 1000);
throttledLog(); // Runs immediately
throttledLog(); // Ignored if called again within 1 second

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * This function creates a throttled version of any function passed to it.
 * "Throttling" ensures that the function cannot be called more than once
 * in the specified `limit` of milliseconds.
 *
 * How it works:
 * - `lastCall` stores the timestamp of the last function execution.
 * - Inside the returned function, we check if enough time has passed since the last call.
 * - If the current time minus `lastCall` is greater than or equal to the `limit`,
 *   we update `lastCall` and call the original function with its arguments.
 */

function throttle(func, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Test the function
const throttled = throttle(() => console.log("Throttled!"), 2000);
throttled(); // Runs
throttled(); // Ignored if run again within 2 seconds

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Closures: To maintain internal state like `lastCall`.
 * - Higher-order functions: throttle returns a new function.
 * - Date.now(): Returns the current timestamp in milliseconds.
 * - Function.prototype.apply(): Calls a function with a given `this` value and arguments.
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Not using `Date.now()` correctly to measure time intervals.
 * - Forgetting to return a new function inside throttle.
 * - Confusing throttle with debounce (debounce waits until no calls happen, throttle limits the rate).
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - Throttle vs Debounce: https://css-tricks.com/debouncing-throttling-explained-examples/
 * - MDN apply(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
 * - JavaScript Closures: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * Here's an alternative version using `setTimeout` for delayed execution.
 * This version ensures that the function is called at most once every limit ms,
 * and skips any intermediate calls.
 */

function throttleAlt(func, limit) {
  let inThrottle;

  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;

      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Example
const logAlt = throttleAlt(() => console.log("ThrottleAlt!"), 1000);
logAlt(); // Will run immediately
logAlt(); // Will be ignored if within 1 second
