// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function doIntervalsOverlap(interval1, interval2) {
  return interval1.start < interval2.end && interval2.start < interval1.end;
}

// Test the function
console.log(doIntervalsOverlap({ start: 9, end: 12 }, { start: 11, end: 13 })); // Output: true
console.log(doIntervalsOverlap({ start: 14, end: 16 }, { start: 16, end: 18 })); // Output: false

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * The function checks if two time intervals overlap.
 * The condition for overlap is that the start of one interval is before the end of the other
 * and vice versa. In other words, if interval1 starts before interval2 ends, and interval2
 * starts before interval1 ends, they overlap.
 *
 * Here's the logic behind the condition:
 * - interval1.start < interval2.end ensures that interval1 doesn't start after interval2 ends.
 * - interval2.start < interval1.end ensures that interval2 doesn't start after interval1 ends.
 */

// Final Solution Code

function doIntervalsOverlap(interval1, interval2) {
  return interval1.start < interval2.end && interval2.start < interval1.end;
}

// Test the function
console.log(doIntervalsOverlap({ start: 9, end: 12 }, { start: 11, end: 13 })); // Output: true
console.log(doIntervalsOverlap({ start: 14, end: 16 }, { start: 16, end: 18 })); // Output: false

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Comparison operators (<, >, <=, >=): Used to compare values.
 * - Logic and conditional checks (&&): To combine multiple conditions.
 * - The importance of considering the range overlap, not just if two intervals start at the same time.
 *
 * Useful Resources:
 * - [MDN Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Overlooking the case where the intervals touch but do not overlap.
 * - Not properly handling edge cases like intervals starting or ending at the same time.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - JavaScript Comparison Operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
 * - JavaScript Logical Operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * You can also approach this by checking if the intervals are disjoint, and then returning the opposite:
 * If not disjoint, they overlap.
 */

function doIntervalsOverlapAlt(interval1, interval2) {
  return !(
    interval1.end <= interval2.start || interval2.end <= interval1.start
  );
}

console.log(
  doIntervalsOverlapAlt({ start: 9, end: 12 }, { start: 11, end: 13 })
); // Output: true
console.log(
  doIntervalsOverlapAlt({ start: 14, end: 16 }, { start: 16, end: 18 })
); // Output: false
