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
console.log(fullName.slice(0, 4)); // output: John (extracts characters from index 0 to 4)  


//string length