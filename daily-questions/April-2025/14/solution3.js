// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function checkNullAndUndefined() {
  const nullValue = null;
  let undefinedValue;

  return {
    nullValue: {
      value: nullValue,
      type: typeof nullValue,
    },
    undefinedValue: {
      value: undefinedValue,
      type: typeof undefinedValue,
    },
  };
}

console.log(checkNullAndUndefined());

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * This function helps us understand the difference between `null` and `undefined`.
 *
 * - `null` is an assignment value. It means "no value" or "empty".
 *   When you assign `null` to a variable, you're saying it should have no value.
 *
 * - `undefined` means a variable has been declared but not yet assigned a value.
 *
 * In this function, we return an object that contains both:
 * - The value (`null` or `undefined`)
 * - The type as returned by `typeof`
 */

function checkNullAndUndefined() {
  const nullValue = null; // Assigned explicitly
  let undefinedValue; // Declared but not assigned

  return {
    nullValue: {
      value: nullValue,
      type: typeof nullValue, // This will be 'object' (quirk in JS)
    },
    undefinedValue: {
      value: undefinedValue,
      type: typeof undefinedValue, // This will be 'undefined'
    },
  };
}

console.log(checkNullAndUndefined());

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - null: A primitive value used to represent intentional absence of any object value.
 * - undefined: A variable that has been declared but not assigned a value is undefined.
 * - typeof operator: Returns a string indicating the type of the unevaluated operand.
 *
 * Resources:
 * - [MDN null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
 * - [MDN undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
 * - [MDN typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Confusing `null` and `undefined` as being the same. They're different.
 * - Relying on `typeof null` returning "object" — this is a well-known JS bug.
 * - Forgetting that uninitialized variables are `undefined` by default.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - [null vs undefined explained](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null_and_undefined)
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * This could also be demonstrated through console logging directly, but returning
 * an object makes the structure more reusable.
 */
