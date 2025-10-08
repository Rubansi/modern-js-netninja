// an array of fruits   
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // output: [ 'Apple', 'Banana', 'Cherry' ]

// accessing elements in an array
console.log(fruits[0]); // output: Apple
console.log(fruits[1]); // output: Banana
console.log(fruits[2]); // output: Cherry

// adding an element to the end of the array    
fruits.push("Date");
console.log(fruits); // output: [ 'Apple', 'Banana', 'Cherry', 'Date' ]

// removing the last element from the array
let lastFruit = fruits.pop();
console.log(lastFruit); // output: Date
console.log(fruits); // output: [ 'Apple', 'Banana', 'Cherry' ]


// array length
console.log(fruits.length); // output: 3

// iterating over an array
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
// output:
// 0: Apple
// 1: Banana
// 2: Cherry    

// array methods
// map, filter, reduce
// map example: 
let numbers = [1, 2, 3, 4, 5];  
let doubled = numbers.map(num => num * 2);
console.log(doubled); // output: [ 2, 4, 6, 8, 10 ] 

// filter example:
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // output: [ 2, 4 ]       


//reduce example:
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // output: 15 (1 + 2 + 3 + 4 + 5)



