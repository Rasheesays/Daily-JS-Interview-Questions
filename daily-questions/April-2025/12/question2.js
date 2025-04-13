// Interview Question 2: Object Destructuring
// You're given the following object representing a user:

const user = {
  id: 101,
  name: "Amina",
  email: "amina@example.com",
  address: {
    city: "Lagos",
    zip: "100001",
  },
};

// Task:
// Use ES6 object destructuring to extract the following into variables:
// - The `name` property
// - The `email` property
// - The `city` inside the `address` object

// Do not access the properties using dot notation (e.g., user.name or user.address.city).
// Use proper destructuring syntax only.

// Your solution should print:
// Amina
// amina@example.com
// Lagos
