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

// tagged template literals
function tag(strings, ...values) {
    console.log(strings); // array of string literals
    console.log(values);  // array of interpolated values
    return "Tagged Template Result";
}

let result = tag`Hello, ${firstName} ${lastName}. You are ${age} years old.`;
console.log(result); // output: Tagged Template Result  

// raw strings
let rawString = String.raw`C:\Users\${firstName}\Documents`;
console.log(rawString); // output: C:\Users\${firstName}\Documents (backslashes are preserved)

// using template strings for HTML generation       
let user = {
    name: "Bob",
    age: 28
};  
let userCard = `
<div class="user-card">
    <h2>${user.name}</h2>
    <p>Age: ${user.age}</p>
</div>
`;

console.log(userCard); // output: HTML structure with user details

// escaping backticks in template strings
let escapedString = `He said, \`It's a beautiful day!\``;
console.log(escapedString); // output: He said, `It's a beautiful day!` 

// using functions within template strings
function toUpperCase(str) {
    return str.toUpperCase();
}
console.log(`Uppercase Name: ${toUpperCase(firstName)}`); // output: Uppercase Name: JOHN

// conditional rendering in template strings
let isMember = true;
let membershipMessage = `Membership Status: ${isMember ? "Active Member" : "Guest"}`;
console.log(membershipMessage); // output: Membership Status: Active Member

// nested expressions
let x = 10;
let y = 20;
console.log(`The product of ${x} and ${y} is ${(() => x * y)()}.`); // output: The product of 10 and 20 is 200.  
// The third placeholder, ${(() => x * y)()}, is more interesting: it defines an arrow function () => x * y that multiplies x and y, and immediately invokes it with (). This is called an Immediately Invoked Function Expression (IIFE) within a template string.