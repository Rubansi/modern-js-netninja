//regular function
const calcArea1 = function (radius){
    return 3.14 * radius**2;

}

const area1 = calcArea1(5);
console.log('area is: ', area1);



//arrow function, newer and shorter way to write functions, with one parameter we do not need parenthesis
const calcArea = (radius) =>  {
    return 3.14 * radius**2;
}

const area = calcArea(5);
console.log('area is: ', area);

//arrow functions with one parameter and one return value
const area2 = calcArea2 = radius => 3.14 * radius **2;

//arrow function example 1
const greet = () => 'hello world';
const result = greet();
console.log(result);


//arrow function example 2- regular expression; 

const bills = function (products, tax){ //we use the function keyword
    let total = 0;
    for (let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bills([10,15,30], 0.2));

//arrow function example 2- arrow expression

const bill = (products, tax) => { // the function keyword is removed and replaced with the arrow
    let total = 0;
    for (let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    } 
    return total;
};

console.log(bill([10,15,30], 0.2));
