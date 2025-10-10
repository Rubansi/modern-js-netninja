// object literals, we use {} and key value pairs

let user = { // in this case user is an object, each property is indented in its own line, a property is identified by key and value pair, strings are closed in single or double quotes.
    name: 'Crystal',
    age: 30,
    email: 'crystal@example.com',
    location: 'berlin',
    blogs: ['the river between', 'a man of the people', 'the enemy of the people']
};

console.log(user);
console.log(user.name); 


console.log(user.age); //output: 30

user.age = 35; //changing the user's age
console.log(user.age); // here we have used the .notation

console.log(user.email);
user['name'] = 'Sean Paul';
console.log(user['name']); //here we have used the [] - square brackets

//note, [] and . can be used interchangeably, but consistency is key
