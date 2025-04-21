// ===============================
// ✅ Final Solution (Code Only)
// ===============================

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Test the class
const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea()); // Output: 50
console.log(rectangle.getPerimeter()); // Output: 30

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * This class represents a rectangle with two main properties: width and height.
 *
 * - The constructor accepts `width` and `height` as parameters and assigns them to the object.
 * - The `getArea()` method calculates the area of the rectangle by multiplying the width and height.
 * - The `getPerimeter()` method calculates the perimeter of the rectangle by using the formula 2 * (width + height).
 */

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Classes: A blueprint for creating objects with shared properties and methods.
 * - Constructor method: A special method used to initialize new objects.
 * - Instance methods: Methods that operate on instances of a class (e.g., `getArea()` and `getPerimeter()`).
 *
 * Useful Resources:
 * - [MDN Classes in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
 * - [MDN Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class#constructor)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Forgetting to call `new` when creating an instance of the class.
 * - Confusing instance methods with static methods (static methods are called on the class itself, not on instances).
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - JavaScript Classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 * - MDN Constructor Method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class#constructor
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * If you prefer, you can use a factory function to create rectangle objects instead of a class.
 * Example:
 */

function createRectangle(width, height) {
  return {
    width,
    height,
    getArea() {
      return this.width * this.height;
    },
    getPerimeter() {
      return 2 * (this.width + this.height);
    },
  };
}

const rectangleAlt = createRectangle(5, 10);
console.log(rectangleAlt.getArea()); // Output: 50
console.log(rectangleAlt.getPerimeter()); // Output: 30
