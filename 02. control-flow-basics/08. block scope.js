// variables and block scope

let age = 30; //global scope outside block

if(true){
   let age = 40; //local scope, valid inside the code block
    console.log('inside 1st code block: ', age);

    if(true){
        let age = 50;
         console.log('inside 2nd code block: ', age);
    }
}

console.log('outside code block: ', age);
