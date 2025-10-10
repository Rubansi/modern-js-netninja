// callbacks & foreach

const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
}

myFunc(function(value){ // parsing a function as an argument
    //do something
    console.log(value);
});

//making use of arrow function
myFunc(value => { // parsing a function as an argument
    //do something
    console.log(value);
});


//example
let people = ['mario', 'luigi', 'ryu', 'shaun', 'china'];
people.forEach(function(){
    console.log('something') //functions fires up five times with the string 'something' for each individual element
});

let persons = ['mario', 'luigi', 'ryu', 'shaun', 'china'];
persons.forEach(function(persons){
    console.log(persons) //functions fires up five times with the string 'something' for each individual element
});

//converted to arrow function
let personList = ['mario', 'luigi', 'ryu', 'shaun', 'china'];
personList.forEach((person, index) => {
    console.log(person) //functions fires up five times with the string 'something' for each individual element
});


//defining a callback function the parsing it
let country = ['Kenya', 'Uganda', 'Tanga', 'Rwanda', 'Malawi'];

const logCountry = (person, index) => {
    console.log(`${index} - hello ${country}`);
}

country.forEach((country, index) => {
    console.log(index, country)
});
