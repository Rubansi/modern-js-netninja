// template strings (template literals)
let firstName = "John";
let lastName = "Doe";
let age = 30;
let greeting = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`; // using backticks `` and ${} for variables
console.log(greeting); // output: Hello, my name is John Doe and I am 30 years old.

// multi-line strings
let multiLine = `This is a string   
that spans multiple
lines.`;

console.log(multiLine); // output: This is a string
//that spans multiple
//lines.    

// expression interpolation
let a = 5;
let b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`); // output: The sum of 5 and 10 is 15.

// nested template strings
let person = {
    name: "Alice",      
    age: 25,
    getInfo: function() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }   
};

console.log(`Person Info: ${person.getInfo()}`); // output: Person Info: Name: Alice, Age: 25