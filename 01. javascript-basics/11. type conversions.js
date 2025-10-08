//type conversions
//converting strings to numbers
let str1 = "123";
let str2 = "45.67";
let str3 = "hello";
console.log(Number(str1)); // output: 123 (string to number)
console.log(Number(str2)); // output: 45.67 (string to number)
console.log(Number(str3)); // output: NaN (invalid number)
console.log(parseInt(str1)); // output: 123 (string to integer)
console.log(parseFloat(str2)); // output: 45.67 (string to float)
console.log(parseInt(str3)); // output: NaN (invalid number)        

//converting numbers to strings
let num1 = 100;
let num2 = 99.99;
console.log(String(num1)); // output: "100" (number to string)
console.log(String(num2)); // output: "99.99" (number to string)    

//converting booleans to strings
let bool1 = true;
let bool2 = false;
console.log(String(bool1)); // output: "true" (boolean to string)
console.log(String(bool2)); // output: "false" (boolean to string)

//converting strings to booleans
let strTrue = "true";
let strFalse = "false";
let strEmpty = "";
console.log(Boolean(strTrue)); // output: true (non-empty string to boolean)
console.log(Boolean(strFalse)); // output: true (non-empty string to boolean)
console.log(Boolean(strEmpty)); // output: false (empty string to boolean)  

//converting numbers to booleans
let zero = 0;
let nonZero = 42;
console.log(Boolean(zero)); // output: false (0 to boolean)
console.log(Boolean(nonZero)); // output: true (non-zero number to boolean) 

//converting booleans to numbers
console.log(Number(true)); // output: 1 (boolean true to number)
console.log(Number(false)); // output: 0 (boolean false to number)  

// Another example;
let score = 100;
console.log(score + 1); // output: 101 (number addition)
console.log(score + "1"); // output: "1001" (number to string conversion, then concatenation)



