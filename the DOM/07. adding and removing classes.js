

const content = document.querySelector('p');

console.log(content.classList); // accessing classes in a document

// adding classes
content.classList.add('nice');
content.classList.remove('nice');
content.classList.add('rice');


const paras = document.querySelector('p');

paras.forEach (p=> {
    console.log(p.innerText);

});