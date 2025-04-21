// Interview Question 1:
// Write a function that limits the rate at which a function can fire.
// This is commonly known as "throttling" — it ensures the function is
// called at most once every X milliseconds.
//
// For example, implement a throttle(func, limit) function that takes:
// - func: the function to be throttled
// - limit: the time interval (in ms)
//
// Usage Example:
// const throttledFunc = throttle(() => console.log("Hello"), 1000);
// throttledFunc(); // Will run immediately
// throttledFunc(); // Will be ignored if called again within 1 second
