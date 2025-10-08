// variables and block scope

let age = 50; //global scope outside block

if(true){
   let age = 40; //local scope, valid inside the code block
    console.log('inside 1st code block: ', age);
}

console.log('outside code block: ', age);
