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