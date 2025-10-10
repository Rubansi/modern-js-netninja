// primitive types - numbers, strings, booleans, null, symbols
// reference types - all types of objects, object literals, arrays, functions, dates, all other objects


//stack and heap - different parts of memory
// stack - when a primitive types is created its stored in a stack, space is limited.
// heap - reference types are stored in the heap, adequate space is available, a pointer is set to the stack when a reference types is created

//important: when we make a copy of a primitive types, we make a duplicate of the values 
// but when we make a copy of a reference types we only make a copy of the pointer but the values remain the same


// primitive values - stored on the stack

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); // both will show a score of 50

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); // scoreOne will show 100 and scoreTwo will show 50 - a change in one did not affect the other.


// reference types - stored on the heap, and a pointer will be initiated in the stack to point to the reference types
const userOne = {name: 'Mario', age: 30};
const userTwo = userOne;

console.log(userOne, userTwo); //output: [ { name: 'Mario', age: 30 }, { name: 'Mario', age: 30 } ]

userOne.age = 40;
console.log(userOne, userTwo); // output: [ { name: 'Mario', age: 40 }, { name: 'Mario', age: 40 } ], note - a change in one causes a change in the other.
