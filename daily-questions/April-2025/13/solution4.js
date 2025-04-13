// ===============================
// ✅ Final Solution (Code Only)
// ===============================

function lengthOfLongestSubstring(s) {
  let map = new Map();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    // If the character is already in the map, move the left pointer
    if (map.has(s[right])) {
      left = Math.max(map.get(s[right]) + 1, left);
    }
    // Update or add the character's index to the map
    map.set(s[right], right);
    // Calculate the maximum length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3

// ===============================
// 🧩 Code with Detailed Explanations
// ===============================

/*
 * This function uses the sliding window technique to find the longest substring
 * without repeating characters.
 *
 * We use a map to store the most recent index of each character as we iterate
 * through the string.
 *
 * - We maintain two pointers (left and right) to form a window. The right pointer
 *   expands the window by moving one character at a time.
 * - If the character at the right pointer is already in the map (i.e., it's a repeat),
 *   the left pointer moves to the right of the previous occurrence of that character.
 * - The window size is calculated by subtracting the left pointer from the right pointer.
 *
 * We keep track of the maximum window size and return it as the result.
 */

// Final Solution Code

function lengthOfLongestSubstring(s) {
  let map = new Map();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(map.get(s[right]) + 1, left);
    }
    map.set(s[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3

// ===============================
// 📘 JavaScript Concepts You Must Know to Answer This Question
// ===============================

/*
 * - Maps: A data structure that stores key-value pairs, where keys are unique.
 * - Sliding Window: A technique where we keep track of a window (or subarray) and adjust it based on certain conditions.
 * - String Manipulation: Understanding how to iterate through and modify strings in JavaScript.
 *
 * If you're unfamiliar with these concepts, check out these resources:
 * - Maps in JavaScript: [MDN Map Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
 * - Sliding Window Technique: [LeetCode Explanation](https://leetcode.com/explore/learn/card/sliding-window/)
 */

// ===============================
// ⚠️ Common Pitfalls and Mistakes to Avoid
// ===============================

/*
 * - Forgetting to update the left pointer after finding a duplicate character.
 * - Incorrectly calculating the window size.
 * - Not resetting the map correctly when updating the left pointer.
 *
 * Example mistake:
 * function lengthOfLongestSubstring(s) {
 *     let map = new Map();
 *     let left = 0;
 *     let maxLength = 0;
 *     for (let right = 0; right < s.length; right++) {
 *         // Mistake: Not updating the left pointer when a repeat character is found.
 *         map.set(s[right], right);
 *         maxLength = Math.max(maxLength, right - left + 1);
 *     }
 *     return maxLength;
 * }
 */

// ===============================
// 🔗 Helpful Resources and Documentation for This Question
// ===============================

/*
 * - MDN Maps: [MDN Map Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
 * - Sliding Window Technique: [LeetCode Explanation](https://leetcode.com/explore/learn/card/sliding-window/)
 */

// ===============================
// 💡 Alternative Solution (If Applicable)
// ===============================

/*
 * Another approach could involve brute force, where we check all possible substrings and calculate the longest one.
 * This approach, however, would have a time complexity of O(n^2), which is inefficient compared to the sliding window approach.
 */
