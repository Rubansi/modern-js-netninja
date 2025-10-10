// primitive types - numbers, strings, booleans, null, symbols
// reference types - all types of objects, object literals, arrays, functions, dates, all other objects


//stack and heap - different parts of memory
// stack - when a primitive types is created its stored in a stack, space is limited.
// heap - reference types are stored in the heap, adequate space is available, a pointer is set to the stack when a reference types is created

//important: when we make a copy of a primitive types, we make a duplicate of the values 
// but when we make a copy of a reference types we only make a copy of the pointer but the values remain the same


// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); // both will show a score of 50

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); // scoreOne will show 100 and scoreTwo will show 50

// reference types
