// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("ABDULRASHEED")); // Output: "DEEHSARLUDBA"

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * This function takes in a string as input and returns the reversed version of that string.
 */

function reverseString(str) {
  // Initialize an empty string to store the reversed string
  let reversed = "";

  // Loop through the string starting from the last character to the first
  for (let i = str.length - 1; i >= 0; i--) {
    // Append each character to the 'reversed' string
    reversed += str[i];
  }

  // Return the reversed string once the loop is done
  return reversed;
}

// Test the function
console.log(reverseString("ABDULRASHEED")); // Output: "DEEHSARLUDBA"

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - String manipulation: Understanding how strings are indexed (from 0) and how to access individual characters.
 * - For loops: A for loop is useful for iterating over a range of values, like looping through the characters of a string in reverse order.
 * - String concatenation: Using the += operator to append characters to a string.
 *
 * If you're unfamiliar with these concepts, check out these resources:
 * - Strings in JavaScript: [MDN String Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
 * - For Loops in JavaScript: [W3Schools For Loop Tutorial](https://www.w3schools.com/js/js_loop_for.asp)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Returning inside the loop: If you mistakenly place the return reversed inside the for loop, the function will return after the first iteration, which means you'll only get the last character (e.g., "A" instead of "ludbA").
 *
 * Example of a mistake:
 * function reverseString(str) {
 *   let reversed = '';
 *   for (let i = str.length - 1; i >= 0; i--) {
 *     reversed += str[i];
 *     return reversed; // Incorrect! This will return too early.
 *   }
 *   return reversed;
 * }
 *
 * Always ensure the return statement is placed outside the loop to get the complete reversed string.
 *
 * - Modifying the string inside the loop: If you try to directly modify the original string instead of creating a new one for the reversed version, it can lead to unexpected behavior because strings in JavaScript are immutable (you cannot change individual characters in a string directly).
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - String manipulation: Learn how strings work and how to manipulate them in JavaScript.
 * - For loops: Check how the for loop works to iterate through an array or string in reverse.
 * - String concatenation: Learn how to use the `+=` operator to concatenate strings.
 *
 * Useful Resources:
 * - [JavaScript Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
 * - [JavaScript For Loop](https://www.w3schools.com/js/js_loop_for.asp)
 * - [MDN on String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods)
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * You can solve this problem more concisely using built-in JavaScript methods like split(), reverse(), and join().
 * Here's an alternative solution:
 */

function reverseStringAlternative(str) {
  return str.split("").reverse().join("");
}

console.log(reverseStringAlternative("ABDULRASHEED")); // Output: "DEEHSARLUDBA"
