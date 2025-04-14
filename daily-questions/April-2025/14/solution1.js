// ===============================
// ✅ Final Solution (Code Only)
// ===============================

const person = {
  name: "Ali",
  greet: function () {
    return `Hello, my name is ${this.name}`;
  },
};

const greetFunc = person.greet;
console.log(greetFunc()); // Output: "Hello, my name is undefined"

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * The function `greet` is originally a method of the `person` object.
 * When called like `person.greet()`, `this` inside the function refers to the `person` object.
 *
 * However, when we assign `greetFunc = person.greet`, we are detaching the method from the object.
 * So when `greetFunc()` is called independently, `this` no longer refers to `person`.
 *
 * In non-strict mode, `this` will refer to the global object (`window` in browser, `global` in Node.js),
 * and since `name` is not defined globally, `this.name` becomes `undefined`.
 *
 * In strict mode, `this` would be `undefined` completely, and using `this.name` would throw an error.
 */

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - `this` keyword behavior in different contexts.
 * - Method vs Function call.
 * - Object methods and how they retain context.
 * - Global object and what happens when you call a method detached from its object.
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Assuming `this` always refers to the object the function was originally defined in.
 * - Forgetting that when a method is extracted and called as a standalone function,
 *   it loses its original context.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - [MDN: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
 * - [JavaScript this Explained](https://www.freecodecamp.org/news/understanding-this-keyword-in-javascript/)
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * To retain the correct context, you can use `bind`:
 */

const boundGreet = person.greet.bind(person);
console.log(boundGreet()); // Output: "Hello, my name is Ali"
