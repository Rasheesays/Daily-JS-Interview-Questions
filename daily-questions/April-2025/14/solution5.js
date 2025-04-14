// ✅ Final Solution (Code Only)
function repeatString(str, n) {
  return str.repeat(n);
}

// Test the function
console.log(repeatString("abc", 3)); // Output: 'abcabcabc'

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * The `repeatString` function takes two arguments: a string (`str`) and a number (`n`).
 *
 * The method `String.prototype.repeat()` is used to repeat the string `str` `n` times.
 * The function returns the new string formed by repeating the original string.
 */

function repeatString(str, n) {
  return str.repeat(n);
}

// Test the function
console.log(repeatString("abc", 3)); // Output: 'abcabcabc'

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - String Methods: Understanding the available methods in JavaScript to manipulate strings.
 * - String.prototype.repeat(): A built-in JavaScript method used to repeat a string a specified number of times.
 *
 * If you're unfamiliar with these concepts, check out these resources:
 * - String Methods: [MDN String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
 * - String.prototype.repeat(): [MDN String.prototype.repeat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Passing a non-number value for `n`: The method `repeat()` expects a non-negative integer for the number of repetitions.
 *
 * Example mistake:
 * function repeatString(str, n) {
 *   return str.repeat('a'); // Incorrect! 'a' is not a valid number.
 * }
 *
 * Correct approach:
 * function repeatString(str, n) {
 *   return str.repeat(n); // Ensure n is a valid number.
 * }
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - MDN String Methods: [MDN String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
 * - MDN String.prototype.repeat(): [MDN String.prototype.repeat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * You can also manually build the repeated string using a loop, though `repeat()` is more efficient.
 */

function repeatStringAlternative(str, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}

console.log(repeatStringAlternative("abc", 3)); // Output: 'abcabcabc'
