// function declaration

function greet(){
    console.log('hello world');
}

//function expression - a function is assigned to a variable
const speak = function (){ 
    console.log('good day!');
};

greet(); // calling a function declaration, or rather invoking a function


speak (); // calling a function expression

// take note of hoisting, applies to function declaration but does not apply to function expression

//in hoisting the function can be called before being declared and will still work

//example

salute (); //function is called before being declared/ defined

function salute(){
    console.log('i salute you!') 
}
