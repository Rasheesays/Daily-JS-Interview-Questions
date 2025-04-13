// Interview Question 5:
// What will be the output of the following code? Explain why.

// Code:
let x = 0;

async function incrementX() {
  x += await 2;
  console.log(x);
}

incrementX();
x += 1;
console.log(x);

// What do you think the output will be and why?
