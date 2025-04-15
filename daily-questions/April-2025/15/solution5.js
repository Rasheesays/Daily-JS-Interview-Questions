// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function sortByProperty(arr, property) {
  return arr.sort((a, b) => a[property] - b[property]);
}

// Test the function
console.log(
  sortByProperty(
    [
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
      { name: "Tom", age: 35 },
    ],
    "age"
  )
);
// Output: [{ name: "Jane", age: 25 }, { name: "John", age: 30 }, { name: "Tom", age: 35 }]

console.log(
  sortByProperty(
    [
      { name: "Bob", age: 45 },
      { name: "Alice", age: 30 },
    ],
    "age"
  )
);
// Output: [{ name: "Alice", age: 30 }, { name: "Bob", age: 45 }]

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * This function takes an array of objects and a property name as inputs,
 * and sorts the array based on the specified property.
 *
 * The sort() method compares the values of the given property for each object
 * in the array. It uses a compare function to perform the sorting, where:
 * - If a[property] < b[property], the sort function places 'a' before 'b'.
 * - If a[property] > b[property], it places 'b' before 'a'.
 * The sort() method modifies the original array.
 *
 * In this case, we are assuming the property is numeric (e.g., age) so we directly subtract
 * the two values (a[property] - b[property]) to sort them in ascending order.
 */

// Final Solution Code

function sortByProperty(arr, property) {
  return arr.sort((a, b) => a[property] - b[property]);
}

// Test the function
console.log(
  sortByProperty(
    [
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
      { name: "Tom", age: 35 },
    ],
    "age"
  )
);
// Output: [{ name: "Jane", age: 25 }, { name: "John", age: 30 }, { name: "Tom", age: 35 }]

console.log(
  sortByProperty(
    [
      { name: "Bob", age: 45 },
      { name: "Alice", age: 30 },
    ],
    "age"
  )
);
// Output: [{ name: "Alice", age: 30 }, { name: "Bob", age: 45 }]

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Array.prototype.sort(): This method sorts the elements of an array in place.
 * - Comparing values with subtraction: Sorting numbers by comparing their difference.
 * - Objects in JavaScript: How to access and manipulate object properties.
 *
 * Useful Resources:
 * - [MDN Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Forgetting that sort() modifies the original array.
 * - Not handling cases where the property does not exist on the objects.
 * - Confusing ascending and descending order.
 * - Using non-numeric properties (e.g., strings) without adjusting the comparison logic.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - Array.prototype.sort(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 * - Working with objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * You can also use a custom comparator function if you need to handle different data types,
 * such as strings or mixed data types.
 */

function sortByPropertyAlt(arr, property) {
  return arr.sort((a, b) => {
    if (typeof a[property] === "string" && typeof b[property] === "string") {
      return a[property].localeCompare(b[property]);
    }
    return a[property] - b[property];
  });
}

console.log(
  sortByPropertyAlt(
    [
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
      { name: "Tom", age: 35 },
    ],
    "age"
  )
);
// Output: [{ name: "Jane", age: 25 }, { name: "John", age: 30 }, { name: "Tom", age: 35 }]
