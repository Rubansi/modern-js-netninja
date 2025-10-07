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

console.log(fullName.replace("John", "Jane")); // output: Jane Doe (replaces 'John' with 'Jane')
console.log(fullName.includes("Doe")); // output: true (checks if 'Doe' is in the string)   
console.log(fullName.repeat(3)); // output: John DoeJohn DoeJohn Doe (repeats the string 3 times)   
console.log(fullName.startsWith("J")); // output: true (checks if the string starts with 'J')
console.log(fullName.endsWith("e")); // output: true (checks if the string ends with 'e')   
console.log(fullName.concat(" is a developer.")); // output: John Doe is a developer. (concatenates strings)
console.log(fullName.search("Doe")); // output: 5 (searches for 'Doe' and returns its position)
console.log(fullName.substr(0, 4)); // output: John (extracts 4 characters starting from index 0)
console.log(fullName.substring(0, 4)); // output: John (extracts characters between index 0 and 4)  
console.log(fullName.valueOf()); // output: John Doe (returns the primitive value of the string)


//escape characters
let quote = 'He said, "It\'s a beautiful day!"';    
console.log(quote); // output: He said, "It's a beautiful day!"

let path = "C:\\Users\\JohnDoe\\Documents";    
console.log(path); // output: C:\Users\JohnDoe\Documents    
let multiLine = `This is a string
that spans multiple
lines.`;    
console.log(multiLine); // output: This is a string
//that spans multiple
//lines.    

//string comparison
let str1 = "apple";
let str2 = "banana";
console.log(str1 === str2); // output: false (strict equality)
console.log(str1 !== str2); // output: true (not equal)
console.log(str1 < str2); // output: true (lexicographical comparison)
console.log(str1 > str2); // output: false (lexicographical comparison)
console.log(str1 <= str2); // output: true
console.log(str1 >= str2); // output: false 

//string conversion
let num = 123;
let bool = true;
console.log(String(num)); // output: "123" (number to string)
console.log(String(bool)); // output: "true" (boolean to string)
console.log(num.toString()); // output: "123" (number to string)
console.log(bool.toString()); // output: "true" (boolean to string)
console.log((456).toString()); // output: "456" (number to string)
console.log((false).toString()); // output: "false" (boolean to string)
console.log(String(null)); // output: "null" (null to string)
console.log(String(undefined)); // output: "undefined" (undefined to string)    
console.log([1, 2, 3].toString()); // output: "1,2,3" (array to string)
console.log({key: "value"}.toString()); // output: "[object Object]" (object to string) 
console.log(String(NaN)); // output: "NaN" (NaN to string)
console.log(String(Infinity)); // output: "Infinity" (Infinity to string)   

//string immutability
let immutableStr = "hello";
immutableStr[0] = "H"; // this won't change the string
console.log(immutableStr); // output: hello (string remains unchanged)  
immutableStr = "Hello"; // reassigning creates a new string
console.log(immutableStr); // output: Hello (string is now changed) 
//strings are immutable, meaning once created, they cannot be changed. Any operation that seems to modify a string actually creates a new string.
// Always refer to the MDN documentation for more string methods and details: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

