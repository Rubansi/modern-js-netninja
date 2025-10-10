//returning values

// const speak = function(name = 'luige', time = 'night'){
//     console.log(`good ${time} ${name}`);
// };

//using console log method
// const calcArea = function(radius){
//     let area = 3.14 * radius **2;
//     console.log(area);
   
// }

// calcArea (5);


//returning values method
const calcArea = function(radius){
    let area = 3.14 * radius **2;
    return area;
   
}

const area = calcArea(5);
console.log(area);




