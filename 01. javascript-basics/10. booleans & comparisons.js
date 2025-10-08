// booleans can be used in template literals

// Example 1: Simple boolean interpolation
let isMember = true;
let membershipMessage = `Membership Status: ${isMember ? "Active Member" : "Guest"}`;
console.log(membershipMessage); // output: Membership Status: Active Member 


// methods can return booleans

// Example 2: Using a method that returns a boolean
let email = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

let result = email.includes('!');
console.log(result); // output: false 
let result1 = names.includes('luigi'); 
console.log(result1); // output: true

 
//comparisons operators
let age = 25;
console.log(age == 25);  // output: true (equal to)
console.log(age != 30);  // output: true (not equal to)
console.log(age > 20);  // output: true (greater than)
console.log(age < 30);  // output: true (less than)
console.log(age >= 25); // output: true (greater than or equal to)
console.log(age <= 20); // output: false (less than or equal to)    

//strict equality and inequality
let score = '100';
console.log(score == 100);  // output: true (loose equality, type coercion)
console.log(score === 100); // output: false (strict equality, no type coercion)
console.log(score != 100);  // output: false (loose inequality, type coercion)
console.log(score !== 100); // output: true (strict inequality, no type coercion)   

//logical operators
let hasDrivingLicense = true;
let hasGoodVision = false;  
console.log(hasDrivingLicense && hasGoodVision); // output: false (AND operator)
console.log(hasDrivingLicense || hasGoodVision); // output: true (OR operator)
console.log(!hasGoodVision); // output: true (NOT operator) 




