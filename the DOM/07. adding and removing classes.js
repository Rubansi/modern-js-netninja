

const content = document.querySelector('p');

console.log(content.classList); // accessing classes in a document

// adding classes
// content.classList.add('nice');
// content.classList.remove('nice');
// content.classList.add('rice');


const paras = document.querySelector('p');

paras.forEach (p=> {
    // console.log(p.textContent);
     if(p.textContent.includes('error')){
        p.classList.add('error') //adds a class called error to any text containing the word error
     }

     if(p.innerText.includes('success')){
        p.classList.add('success') // adds a class called success to any line containing the word success
     }
});

//note when to use innerText and textContent (displays all content even though its hidden)


// example, toggling classes
const title = document.querySelector('.title');

title.classList.toggle('test');  //changes class to test
title.classList.toggle('test');

