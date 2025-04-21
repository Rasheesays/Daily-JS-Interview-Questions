// ===============================
// ✅ Final Solution (Code Only)
// ===============================

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Method to get car information
  getCarInfo() {
    return `${this.year} ${this.make} ${this.model}`;
  }

  // Method to check if the car is new (manufactured in the current year)
  isNew() {
    const currentYear = new Date().getFullYear();
    return this.year === currentYear;
  }
}

// Example usage:
const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getCarInfo()); // Output: "2020 Toyota Corolla"
console.log(myCar.isNew()); // Output: true or false based on the current year

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * The `Car` class has three properties: `make`, `model`, and `year`, which represent the make,
 * model, and year of manufacture of the car respectively.
 *
 * The constructor takes these three values as parameters and assigns them to the respective properties.
 *
 * The `getCarInfo` method returns a string with the car's information in the format: "year make model".
 *
 * The `isNew` method checks if the car's year is equal to the current year and returns `true` if the car
 * is new, and `false` otherwise. The current year is retrieved using `new Date().getFullYear()`.
 */

// Final Solution Code

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Method to get car information
  getCarInfo() {
    return `${this.year} ${this.make} ${this.model}`;
  }

  // Method to check if the car is new (manufactured in the current year)
  isNew() {
    const currentYear = new Date().getFullYear();
    return this.year === currentYear;
  }
}

// Example usage:
const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getCarInfo()); // Output: "2020 Toyota Corolla"
console.log(myCar.isNew()); // Output: true or false based on the current year

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - JavaScript Classes: How to define a class and use the `constructor` method to initialize properties.
 * - `this` keyword: Refers to the current instance of the class.
 * - `new Date().getFullYear()`: Used to get the current year from the system date.
 *
 * Useful Resources:
 * - [MDN Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
 * - [MDN Date: getFullYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Forgetting to use `new` when creating an instance of the class.
 * - Using incorrect methods to get the current year.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - [MDN Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
 * - [MDN Date: getFullYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * Another approach could be to implement the class using a factory function and storing car data in an object.
 */

function createCar(make, model, year) {
  return {
    make,
    model,
    year,
    getCarInfo: function () {
      return `${this.year} ${this.make} ${this.model}`;
    },
    isNew: function () {
      const currentYear = new Date().getFullYear();
      return this.year === currentYear;
    },
  };
}

const myCarAlt = createCar("Toyota", "Corolla", 2020);
console.log(myCarAlt.getCarInfo()); // Output: "2020 Toyota Corolla"
console.log(myCarAlt.isNew()); // Output: true or false based on the current year
