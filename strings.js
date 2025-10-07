//strings
console.log("hello world"); // double quotes
console.log('hello world'); // single quotes

//string concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
let fullName1 = firstName + lastName;
console.log(fullName); // output: John Doe
console.log(fullName1); // output: JohnDoe

//template strings (template literals)
let age = 30;
let greeting = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`; // using backticks `` and ${} for variables
console.log(greeting); // output: Hello, my name is John Doe and I am 30 years old.



//getting characters
console.log(fullName[0]); // output: J (first character)



//string methods
console.log(fullName.toUpperCase()); // output: JOHN DOE
console.log(fullName.toLowerCase()); // output: john doe
console.log(fullName.indexOf("D")); // output: 5 (position of 'D' in the string)
console.log(fullName.slice(0, 3)); // output: John (extracts characters from index 0 to 4)  

let newName = fullName.toLowerCase();
console.log(newName); // output: john doe   

//string length
console.log(fullName.length); // output: 8 (number of characters in the string)
console.log(newName.length); // output: 8
console.log(fullName.charAt(0)); // output: J (character at index 0)
console.log(fullName.charAt(fullName.length - 1)); // output: e (last character)
console.log(fullName.trim()); // removes whitespace from both ends of the string
console.log(fullName.split(" ")); // splits the string into an array based on the space character, output: [ 'John', 'Doe' ]    