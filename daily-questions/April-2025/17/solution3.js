// ===============================
// ✅ Final Solution (Code Only)
// ===============================

const obj = {
  value: 42,
  getValue: function () {
    return this.value;
  },
};

const unboundGetValue = obj.getValue;
console.log(unboundGetValue()); // undefined

const boundGetValue = obj.getValue.bind(obj);
console.log(boundGetValue()); // 42

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * In JavaScript, when you extract a method from an object (like assigning it to a variable),
 * the context (`this`) can be lost unless it’s explicitly preserved.
 *
 * In the case of:
 *   const unboundGetValue = obj.getValue;
 * the function is now a standalone function call, not tied to the object `obj`.
 * So `this` inside `getValue` is no longer `obj`, but instead refers to the global object (or `undefined` in strict mode).
 * That’s why it returns `undefined`.
 *
 * However, when you use `.bind(obj)`, you're explicitly binding the function to the object.
 * So when `boundGetValue()` is called, `this` is guaranteed to be `obj`, and `this.value` correctly returns 42.
 */

// Original Object and Method
const obj = {
  value: 42,
  getValue: function () {
    return this.value;
  },
};

// ❌ Unbound Function Call (this is lost)
const unboundGetValue = obj.getValue;
console.log(unboundGetValue()); // undefined

// ✅ Bound Function Call (this is preserved)
const boundGetValue = obj.getValue.bind(obj);
console.log(boundGetValue()); // 42

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Function context (`this`) and how it changes when a function is detached from its object.
 * - The `bind()` method, which allows setting a fixed `this` context.
 * - Method vs standalone function behavior.
 * - Global context vs object context in JavaScript.
 *
 * Useful Resources:
 * - [MDN: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
 * - [MDN: bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Assuming that `this` inside a method will always refer to the object it was defined on.
 * - Forgetting to bind a method when passing it as a callback or assigning it to a variable.
 * - Not understanding that `this` depends on how the function is called, not where it is defined.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - `this` keyword in JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 * - bind() method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * An arrow function could also preserve the context if defined appropriately,
 * but in this specific case, `.bind()` is the standard and clean solution.
 */
