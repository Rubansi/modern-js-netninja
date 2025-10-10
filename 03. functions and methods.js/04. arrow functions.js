//regular function
const calcArea1 = function (radius){
    return 3.14 * radius**2;

}

const area1 = calcArea1(5);
console.log('area is: ', area1);



//arrow function
const calcArea = (radius) =>  {
    return 3.14 * radius**2;
}

const area = calcArea(5);
console.log('area is: ', area);