// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function formatNumberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

console.log(formatNumberWithCommas(1234567));
// Output: "1,234,567"

console.log(formatNumberWithCommas(1000000000));
// Output: "1,000,000,000"

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * This function formats a number by adding commas as thousand separators.
 * It first converts the number to a string using the `toString()` method.
 * Then, it uses a regular expression with `replace()` to insert commas.
 * The regular expression looks for positions that are not word boundaries (`\B`), followed by groups of three digits (`(\d{3})`), and adds a comma before each group.
 */

// Final Solution Code

function formatNumberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Test the function
console.log(formatNumberWithCommas(1234567));
// Output: "1,234,567"

console.log(formatNumberWithCommas(1000000000));
// Output: "1,000,000,000"

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Regular Expressions (RegEx): A powerful tool for pattern matching and replacement in strings.
 * - String.prototype.replace(): Replaces parts of a string based on a given pattern.
 * - The toString() method: Converts a number to its string representation.
 *
 * Useful Resources:
 * - [MDN Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
 * - [MDN String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
 * - [MDN Number.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Misunderstanding regular expressions. The `\B` is a key part of the regex, ensuring commas are placed between groups of digits.
 * - Forgetting to handle numbers with fewer than four digits, which don't need any commas.
 * - Not considering edge cases, such as negative numbers or non-numeric inputs.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - Regular Expressions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 * - String.prototype.replace(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 * - Number.toString(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * You can also achieve this by manually iterating through the number and inserting commas at the appropriate positions.
 */

function formatNumberWithCommasAlt(num) {
  let numStr = num.toString();
  let result = "";
  let count = 0;

  // Loop through the string in reverse
  for (let i = numStr.length - 1; i >= 0; i--) {
    count++;
    result = numStr[i] + result;
    if (count % 3 === 0 && i !== 0) {
      result = "," + result;
    }
  }

  return result;
}

console.log(formatNumberWithCommasAlt(1234567));
// Output: "1,234,567"

console.log(formatNumberWithCommasAlt(1000000000));
// Output: "1,000,000,000"
