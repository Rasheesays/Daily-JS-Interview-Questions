// Interview Question 1:
// You are given a list of users with their login timestamps.
// Your task is to sort the users based on their most recent login time in descending order (latest first).
//
// Input:
const users = [
  { username: "alice", lastLogin: "2023-06-01T10:20:30Z" },
  { username: "bob", lastLogin: "2024-12-31T23:59:59Z" },
  { username: "charlie", lastLogin: "2022-01-01T00:00:00Z" },
];

// Output:
// [
//   { username: "bob", lastLogin: "2024-12-31T23:59:59Z" },
//   { username: "alice", lastLogin: "2023-06-01T10:20:30Z" },
//   { username: "charlie", lastLogin: "2022-01-01T00:00:00Z" }
// ]
//
// Requirement: Return a new array sorted by most recent `lastLogin`.
