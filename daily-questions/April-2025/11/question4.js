// Interview Question 4: Event Loop and Asynchronous Execution
// What will be the output of the following code and why?

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Explain the order in which the logs will appear and why.
