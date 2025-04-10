// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // Reverse the string and compare it to the original cleaned string
  const reversedStr = cleanStr.split("").reverse().join("");

  return cleanStr === reversedStr;
}

console.log(isPalindrome("A man a plan a canal Panama")); // Output: true
console.log(isPalindrome("hello")); // Output: false

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * The function takes a string as input and:
 *
 * 1. Removes any non-alphanumeric characters (spaces, punctuation) and converts the string to lowercase
 *    to handle cases where the input may have spaces or punctuation, as well as to make the check case-insensitive.
 * 2. Reverses the string and compares it to the original cleaned string.
 * 3. Returns true if the original cleaned string matches the reversed string, indicating it's a palindrome.
 */

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - String manipulation: understanding how to work with strings in JavaScript, such as removing characters and converting to lowercase.
 * - Regular expressions (RegEx): Used to match and remove non-alphanumeric characters.
 * - Array methods: Understanding how to split a string into an array, reverse it, and join it back into a string.
 * - Case insensitivity: Converting both the original string and the reversed string to lowercase to ensure the comparison is case-insensitive.
 *
 * If you're unfamiliar with these concepts, check out these resources:
 * - String Manipulation: [MDN String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
 * - Regular Expressions: [MDN Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
 * - Array Methods: [MDN Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Not cleaning the string: If you don't remove non-alphanumeric characters or handle case insensitivity,
 *   the function might return incorrect results.
 *
 * Example mistake:
 * function isPalindrome(str) {
 *   return str === str.split('').reverse().join('');
 * }
 * // This doesn't handle spaces or capitalization, which will cause problems for most palindrome inputs.
 *
 * Correct approach:
 * function isPalindrome(str) {
 *   const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
 *   const reversedStr = cleanStr.split('').reverse().join('');
 *   return cleanStr === reversedStr;
 * }
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - MDN String Methods: [MDN String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
 * - MDN Regular Expressions: [MDN Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
 * - MDN Array Methods: [MDN Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * Another approach would be to check the string by iterating through it from both ends and comparing each character.
 * Here's an example:
 */

function isPalindromeAlternative(str) {
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindromeAlternative("A man a plan a canal Panama")); // Output: true
console.log(isPalindromeAlternative("hello")); // Output: false
