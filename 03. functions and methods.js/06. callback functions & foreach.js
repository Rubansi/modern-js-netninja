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

