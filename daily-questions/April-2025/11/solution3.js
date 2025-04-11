// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function removeDuplicates(str) {
  let result = "";
  for (let char of str) {
    if (!result.includes(char)) {
      result += char;
    }
  }
  return result;
}

console.log(removeDuplicates("programming")); // Output: "progamin"

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * The function removeDuplicates takes a string and builds a new string,
 * appending characters only if they haven't been added before.
 *
 * It uses the includes() method to check if the character has already been seen.
 * This way, we preserve the order of characters while ensuring each is unique.
 */

function removeDuplicates(str) {
  let result = "";
  for (let char of str) {
    if (!result.includes(char)) {
      result += char;
    }
  }
  return result;
}

console.log(removeDuplicates("programming")); // Output: "progamin"

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Strings: Understanding string manipulation and iteration.
 * - for...of loop: A way to iterate through characters in a string.
 * - includes(): Checks if a string already contains a character.
 * - String concatenation: Using += to build a new string.
 *
 * Resources:
 * - String methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 * - for...of loop: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Using the wrong method like indexOf() without understanding its role.
 * - Forgetting to initialize the result string properly.
 * - Accidentally removing all instances instead of just duplicates.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - MDN String.prototype.includes(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 * - JavaScript Loops: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * Using a Set to track characters for more efficiency.
 */

function removeDuplicatesWithSet(str) {
  const seen = new Set();
  let result = "";

  for (let char of str) {
    if (!seen.has(char)) {
      seen.add(char);
      result += char;
    }
  }

  return result;
}

console.log(removeDuplicatesWithSet("programming")); // Output: "progamin"
