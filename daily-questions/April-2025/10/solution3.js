// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Call the function to execute it
fizzBuzz();

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * The function `fizzBuzz()` iterates over numbers from 1 to 100.
 * For each number:
 * - If the number is divisible by both 3 and 5, it prints "FizzBuzz".
 * - If the number is divisible by only 3, it prints "Fizz".
 * - If the number is divisible by only 5, it prints "Buzz".
 * - Otherwise, it prints the number itself.
 */

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Modulo operator (%): The modulo operator is used to check divisibility.
 *   `i % 3 === 0` checks if `i` is divisible by 3.
 *   `i % 5 === 0` checks if `i` is divisible by 5.
 *
 * - Conditional statements (if-else): Used to check whether a number is divisible by both 3 and 5,
 *   only 3, only 5, or neither, and to print the appropriate output.
 *
 * If you're unfamiliar with these concepts, check out these resources:
 * - Modulo operator: [MDN Modulo Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
 * - Conditional statements in JavaScript: [W3Schools If-Else Tutorial](https://www.w3schools.com/js/js_if_else.asp)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Incorrect condition order: Make sure you check for both divisibility by 3 and 5 first.
 *   If you reverse the checks and check for divisibility by 3 and 5 last, it may miss the case where a number is divisible by both 3 and 5.
 *
 * Example mistake:
 * if (i % 5 === 0) {
 *   console.log("Buzz");
 * } else if (i % 3 === 0) {
 *   console.log("Fizz");
 * } else if (i % 3 === 0 && i % 5 === 0) {
 *   console.log("FizzBuzz"); // This will never run due to order.
 * }
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - Modulo operator in JavaScript: [MDN Modulo Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
 * - Conditional Statements: [W3Schools If-Else Tutorial](https://www.w3schools.com/js/js_if_else.asp)
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * An alternative solution could involve using a single line of code with the ternary operator:
 */

function fizzBuzzAlternative() {
  [...Array(100)].map((_, i) =>
    console.log(
      i + 1,
      (i + 1) % 3 === 0 && (i + 1) % 5 === 0
        ? "FizzBuzz"
        : (i + 1) % 3 === 0
        ? "Fizz"
        : (i + 1) % 5 === 0
        ? "Buzz"
        : i + 1
    )
  );
}

// Calling the alternative solution
fizzBuzzAlternative();
