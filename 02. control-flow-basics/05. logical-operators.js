// logical operators - OR || and AND && 

//logical OR and logical AND

const password = 'password1254'

if (password.length >= 12){
    console.log('that is a strong password is mighty strong')
} else if (password.length >=8){
    console.log('that is a ling password!');
}else {
    console.log('password is not long enough ')
}


//Using logical operators; 
const password1 = 'password1254';

if (password1.length && password1.includes('@')){
    console.log('that is a strong password is mighty strong')
} else if (password1.length >= 8 || password.includes ('@')) {
    console.log('that is a long password!');
}else {
    console.log('password is not long enough ')
}

//logical OR - one of the arguments has to be true
//logical AND && - both arguments have to be true.


//logical NOT (!)
//Executes when a condition is not true
// when a ! is placed in front of a boolean it negates the boolean. If that boolean was false, it switches to trues.
let user = false;

if(!user){
    console.log('you must be logged in to continue')
}

console.log (!true);
console.log(!false);