// Interview Question 1: Understanding the Value of `this`

// What will be the output of the following code and why?

const person = {
  name: "Ali",
  greet: function () {
    return `Hello, my name is ${this.name}`;
  },
};

const greetFunc = person.greet;
console.log(greetFunc()); // What will this output?

// 🤔 Explain what `this` refers to in this context.
