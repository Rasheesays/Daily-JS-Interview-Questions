// ===============================
// ✅ Final Solution (Code Only)
// ===============================

const user = {
  id: 101,
  name: "Amina",
  email: "amina@example.com",
  address: {
    city: "Lagos",
    zip: "100001",
  },
};

const { name, email, address } = user;
const { city } = address;

console.log(name); // Amina
console.log(email); // amina@example.com
console.log(city); // Lagos

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * We are destructuring the object in two steps:
 *
 * Step 1: Destructure top-level properties from `user` — `name`, `email`, and `address`.
 * Step 2: Destructure the nested `city` from the `address` object separately.
 *
 * This helps avoid syntax issues in some environments that may not support full nested destructuring at once.
 */

const { name: userName, email: userEmail, address: userAddress } = user;
const { city: userCity } = userAddress;

console.log(userName); // Output: Amina
console.log(userEmail); // Output: amina@example.com
console.log(userCity); // Output: Lagos

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Object Destructuring
 * - Nested Destructuring
 *
 * Resources:
 * - MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Trying to destructure deeply nested properties in one go can lead to syntax errors if not done correctly.
 * - Make sure the property exists, or you may get `undefined` or errors.
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * You can also access properties the classic way without destructuring:
 * console.log(user.name);
 * console.log(user.email);
 * console.log(user.address.city);
 */
