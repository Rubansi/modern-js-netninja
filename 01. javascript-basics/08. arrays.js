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