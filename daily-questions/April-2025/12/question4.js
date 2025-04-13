// Interview Question 4:
// What will the following code log to the console and why?

let obj = { a: 1 };
const arr = [obj];

obj.a = 2;
obj = { a: 3 };
arr[0].a = 4;

console.log(arr[0]);
