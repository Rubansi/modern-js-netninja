// variables and block scope

let age = 30; //global scope outside block

if(true){
   let age = 40; //local scope, valid inside the code block
    console.log('inside 1st code block: ', age);

    if(true){
        let age = 50;
         console.log('inside 2nd code block: ', age);
         var test = 'hello'; //block scope does not apply to var
    }
}

console.log('outside code block: ', age, test);

// note that scope rules apply to both let and const variables and not to var

