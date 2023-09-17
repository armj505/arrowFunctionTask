// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
const greet = (name) => console.log(`Hello, ${name}`);
greet("Ahmad");

// Q2) Write a simple arrow function that takes two parameters and returns their sum.
const sum = (num1, num2) => console.log(num1 + num2);
sum(1, 2);

// Q3) Write a simple arrow function that squares a number.
const square = (num) => console.log(num ** 2);
square(4);

// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
const squareArr = (arr) => {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] ** 2);
  }
  console.log(newArr);
};

// Q4 - second answer
// let squareArr = (arr) => arr.map((i) => i ** 2);

console.log(squareArr([2, 4, 8]));
