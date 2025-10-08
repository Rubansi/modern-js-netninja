//a variable is a container for storing data
let age = 25; // we use let for variables that can change
const year = 2024; // we use const for variables that won't change 

console.log(age, year);

age = 30;
console.log(age);

var score = 75; // 'var' is the old way of declaring variables, avoid using it in modern JS
console.log(score); // still works, but not recommended

// Variables Naming conventions
// 1.cannot start with a number (e.g., let 1stName = 'John'; is invalid)
// 2.cannot contain spaces (e.g., let first name = 'John'; is invalid)
// 3. can use letters, numbers, underscores (_), and dollar signs ($)
// 4.camelCase is the common convention for naming variables in javascript (e.g., let firstName = 'John';)