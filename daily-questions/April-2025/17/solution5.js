// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function groupByCategory(products) {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});
}

// Test the function with sample input
const products = [
  { name: "Shirt", price: 20, category: "Clothing" },
  { name: "Pants", price: 40, category: "Clothing" },
  { name: "Apple", price: 1, category: "Food" },
  { name: "Orange", price: 1.2, category: "Food" },
  { name: "Laptop", price: 800, category: "Electronics" },
];

console.log(groupByCategory(products));

// Expected Output:
// {
//   Clothing: [
//     { name: "Shirt", price: 20, category: "Clothing" },
//     { name: "Pants", price: 40, category: "Clothing" }
//   ],
//   Food: [
//     { name: "Apple", price: 1, category: "Food" },
//     { name: "Orange", price: 1.2, category: "Food" }
//   ],
//   Electronics: [
//     { name: "Laptop", price: 800, category: "Electronics" }
//   ]
// }

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * This function groups the products by category.
 * The `reduce()` method is used to accumulate the results into an object, where each category is a key,
 * and the value is an array of products in that category.
 *
 * - The `acc` parameter is the accumulator object that will store the grouped products.
 * - For each `product`, we check if the `category` already exists as a key in the accumulator.
 * - If not, we initialize the category as an empty array.
 * - We then push the product into the array for that category.
 * - Finally, we return the accumulator object.
 */

// Final Solution Code

function groupByCategory(products) {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});
}

// Test the function with sample input
const products = [
  { name: "Shirt", price: 20, category: "Clothing" },
  { name: "Pants", price: 40, category: "Clothing" },
  { name: "Apple", price: 1, category: "Food" },
  { name: "Orange", price: 1.2, category: "Food" },
  { name: "Laptop", price: 800, category: "Electronics" },
];

console.log(groupByCategory(products));

// Expected Output:
// {
//   Clothing: [
//     { name: "Shirt", price: 20, category: "Clothing" },
//     { name: "Pants", price: 40, category: "Clothing" }
//   ],
//   Food: [
//     { name: "Apple", price: 1, category: "Food" },
//     { name: "Orange", price: 1.2, category: "Food" }
//   ],
//   Electronics: [
//     { name: "Laptop", price: 800, category: "Electronics" }
//   ]
// }

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Array.prototype.reduce(): Allows you to accumulate values (in this case, group objects) into a single result.
 * - Object keys: Understanding how to dynamically add keys to an object.
 * - Array methods: Using `.push()` to add elements to an array.
 *
 * Useful Resources:
 * - [MDN reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
 * - [MDN Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Forgetting to initialize the category array when it's the first product in a category.
 * - Not returning the accumulator object at the end of the reduce function.
 * - Using incorrect variable names or confusing the accumulator with the current element.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - [MDN Array reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
 * - [MDN Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
 * - [JavaScript Object Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * An alternative solution could be to use `forEach()` instead of `reduce()` for looping over the products,
 * but `reduce()` is a more elegant way to accumulate results.
 */

// Alternative solution using forEach

function groupByCategoryAlt(products) {
  const result = {};
  products.forEach((product) => {
    if (!result[product.category]) {
      result[product.category] = [];
    }
    result[product.category].push(product);
  });
  return result;
}

console.log(groupByCategoryAlt(products));

// Expected Output:
// {
//   Clothing: [
//     { name: "Shirt", price: 20, category: "Clothing" },
//     { name: "Pants", price: 40, category: "Clothing" }
//   ],
//   Food: [
//     { name: "Apple", price: 1, category: "Food" },
//     { name: "Orange", price: 1.2, category: "Food" }
//   ],
//   Electronics: [
//     { name: "Laptop", price: 800, category: "Electronics" }
//   ]
// }
