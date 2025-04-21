// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function getCoordinates(user) {
  const lat = user?.address?.location?.lat;
  const lng = user?.address?.location?.lng;

  return lat !== undefined && lng !== undefined
    ? `${lat} ${lng}`
    : "Location not available";
}

// Test cases
console.log(
  getCoordinates({
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
  })
); // Output: "51.509865 -0.118092"

console.log(
  getCoordinates({
    id: 1,
    name: "Bob",
    address: {
      street: "456 Elm St",
      city: "Nowhere",
    },
  })
); // Output: "Location not available"

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * This function safely extracts the `lat` and `lng` values from a nested object.
 * We use optional chaining (`?.`) to avoid errors when accessing deeply nested properties
 * that may not exist.
 *
 * If either `lat` or `lng` is undefined, we return a fallback message.
 * Otherwise, we return a string with the latitude and longitude.
 */

// Final Solution Code

function getCoordinates(user) {
  const lat = user?.address?.location?.lat;
  const lng = user?.address?.location?.lng;

  return lat !== undefined && lng !== undefined
    ? `${lat} ${lng}`
    : "Location not available";
}

// Test cases
console.log(
  getCoordinates({
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
  })
); // Output: "51.509865 -0.118092"

console.log(
  getCoordinates({
    id: 1,
    name: "Bob",
    address: {
      street: "456 Elm St",
      city: "Nowhere",
    },
  })
); // Output: "Location not available"

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Optional Chaining (`?.`): Allows safe access to deeply nested properties without throwing errors.
 * - Logical AND (`&&`) and strict comparison with `!== undefined` to ensure both values are present.
 *
 * Useful Resources:
 * - [MDN Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Directly accessing nested properties like `user.address.location.lat` without checking if they exist
 *   can result in runtime errors if any part of the chain is undefined.
 * - Returning a string like `"undefined undefined"` if `lat` or `lng` is missing instead of a proper fallback.
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - Optional Chaining: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 * - Working with Nested Objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * You can also use a try-catch block to handle unexpected missing properties,
 * but optional chaining is more elegant and readable.
 */

function getCoordinatesWithTryCatch(user) {
  try {
    const lat = user.address.location.lat;
    const lng = user.address.location.lng;
    return `${lat} ${lng}`;
  } catch {
    return "Location not available";
  }
}

console.log(
  getCoordinatesWithTryCatch({
    id: 1,
    name: "Charlie",
    address: {},
  })
); // Output: "Location not available"
