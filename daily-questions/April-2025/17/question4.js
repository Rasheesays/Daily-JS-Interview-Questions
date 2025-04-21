// Interview Question 4:
// You have the following nested object structure:
//
const user = {
  id: 1,
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "Wonderland",
    location: {
      lat: 51.509865,
      lng: -0.118092,
    },
  },
};
//
// Write a function that safely accesses the nested `lat` and `lng` values from the user object.
// Make sure it doesn't throw an error if some of the nested properties are missing.
//
// Expected Output:
// If location is present: 51.509865 -0.118092
// If location is missing or undefined: "Location not available"
