// variables and block scope

let age = 50; //outside the block

if(true){
   let age = 40; //local scope
    console.log('inside 1st code block: ', age);
}

console.log('outside code block: ', age);
