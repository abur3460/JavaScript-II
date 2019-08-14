// ==== Challenge 1: Write your own closure ====
/* Assignment Finder: */
console.log("----------------------")
console.log("You are on: closure.js")
console.log("----------------------")
// Write a simple closure of your own creation.  Keep it simple!
var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
