// ===============================
// ✅ Final Solution (Code Only)
// ===============================

let obj = { a: 1 };
const arr = [obj];

obj.a = 2;
obj = { a: 3 }; // This line will throw an error (Assignment to constant variable)
arr[0].a = 4;

console.log(arr[0]);

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * The code will actually result in a **TypeError** due to the line:
 * `obj = { a: 3 };`
 *
 * Why? Because `obj` was declared using `let`, not `const`, in our fixed version.
 * But if you kept `const obj = { a: 1 }`, reassigning `obj` would not be allowed.
 *
 * Let's clarify with the assumption that `obj` was declared with `let`.
 * Here's what happens step-by-step:
 *
 * 1. `let obj = { a: 1 };` — `obj` is an object with property `a = 1`.
 * 2. `const arr = [obj];` — `arr` is an array holding a reference to the object `obj`.
 * 3. `obj.a = 2;` — You update the property `a` of the same object to `2`.
 * 4. `obj = { a: 3 };` — Now `obj` points to a new object `{ a: 3 }`.
 *    The original object that `arr[0]` is pointing to is still in memory.
 * 5. `arr[0].a = 4;` — You mutate the original object referenced in the array. So its `a` becomes `4`.
 * 6. `console.log(arr[0]);` — Outputs: `{ a: 4 }`.
 */

// Working version with `let` used for `obj`:

let obj = { a: 1 };
const arr = [obj];

obj.a = 2;
obj = { a: 3 };
arr[0].a = 4;

console.log(arr[0]); // Output: { a: 4 }

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Object references: Arrays store references to objects, not copies.
 * - let vs const: Understanding mutability and re-assignment rules.
 * - Mutation vs re-assignment: Changing an object's property is not the same as assigning a new object.
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Assuming `obj = { a: 3 }` changes the object stored in `arr[0]`. It does not — it just reassigns `obj`.
 * - Confusing re-assignment with mutation: Mutating the object updates it in all places it's referenced.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - Object References: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
 * - let vs const: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 * - Reference types vs primitive types: https://javascript.info/object
 */

// ===============================
// 💡 Alternative Version (For Clarification)
// ===============================

/*
 * Try running the same example with `const obj = { a: 1 }` instead of `let`.
 * That will throw an error when trying to reassign `obj`.
 */
