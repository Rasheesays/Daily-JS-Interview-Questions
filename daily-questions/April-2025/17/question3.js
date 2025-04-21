// Interview Question 3:
// What will be the output of the following code and why?

const obj = {
  value: 42,
  getValue: function () {
    return this.value;
  },
};

const unboundGetValue = obj.getValue;
console.log(unboundGetValue()); // ?

const boundGetValue = obj.getValue.bind(obj);
console.log(boundGetValue()); // ?
