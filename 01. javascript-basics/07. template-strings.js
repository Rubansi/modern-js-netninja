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


// using template strings for SQL queries (example)
let tableName = "users";
let columnName = "age";
let minAge = 18;
let sqlQuery = `SELECT * FROM ${tableName} WHERE ${columnName} >= ${minAge};`;
console.log(sqlQuery); // output: SELECT * FROM users WHERE age >= 18;      

// using template strings for URL generation
let baseURL = "https://api.example.com";
let endpoint = "getUser";   

let userId = 123;
let apiURL = `${baseURL}/${endpoint}?id=${userId}`;
console.log(apiURL); // output: https://api.example.com/getUser?id=123  

// using template strings for logging   
let logLevel = "INFO";
let logMessage = "User logged in.";
console.log(`[${logLevel}] - ${new Date().toISOString()} - ${logMessage}`); // output: [INFO] - 2024-06-15T12:34:56.789Z - User logged in.

// using template strings for dynamic CSS generation    
let color = "blue";
let fontSize = "16px";
let css = ` body {
    color: ${color};
    font-size: ${fontSize};
} `;
console.log(css); // output: CSS styles with dynamic color and font size    

// using template strings for dynamic file paths
let fileName = "document";
let fileExtension = "txt";
let filePath = `/home/user/${fileName}.${fileExtension}`;
console.log(filePath); // output: /home/user/document.txt   

// using template strings for dynamic email generation
let recipientName = "Charlie";
let senderName = "Support Team";
let emailContent = `
Dear ${recipientName},  
Thank you for contacting us. We will get back to you shortly.

Best regards,  
${senderName}
`;
console.log(emailContent); // output: formatted email content with recipient and sender names   

// using template strings for dynamic JSON generation
let jsonData = `{
    "name": "${firstName} ${lastName}",     
    "age": ${age},
    "isMember": ${isMember}
}`;
console.log(jsonData); // output: JSON string with dynamic values

// using template strings for dynamic XML generation
let xmlData = `
<user>  
    <name>${firstName} ${lastName}</name>
    <age>${age}</age>
    <isMember>${isMember}</isMember>    
</user>
`;
console.log(xmlData); // output: XML string with dynamic values 

// using template strings for dynamic command generation
let command = `cp /source/${fileName}.${fileExtension} /destination/${fileName}_backup.${fileExtension}`;
console.log(command); // output: cp /source/document.txt /destination/document_backup.txt   

// using template strings for dynamic math expressions
let radius = 5;
let area = `The area of a circle with radius ${radius} is ${Math.PI * radius * radius}.`;
console.log(area); // output: The area of a circle with radius 5 is 78.53981633974483.

// using template strings for dynamic date formatting
let event = "Meeting";
let eventDate = new Date(2024, 5, 15);  
let formattedDate = `The ${event} is scheduled for ${eventDate.toDateString()}.`;
console.log(formattedDate); // output: The Meeting is scheduled for Sat Jun 15 2024.

// using template strings for dynamic array generation
let items = ["apple", "banana", "cherry"];
let itemList = `Items: ${items.join(", ")}.`;       
console.log(itemList); // output: Items: apple, banana, cherry.

// using template strings for dynamic object property access
let property = "name";
let dynamicObject = {
    name: "Dynamic Name",
    age: 40
};
console.log(`The property "${property}" has the value: ${dynamicObject[property]}.`); // output: The property "name" has the value: Dynamic Name.

// using template strings for dynamic function calls
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(`${greet(firstName)}`); // output: Hello, John!