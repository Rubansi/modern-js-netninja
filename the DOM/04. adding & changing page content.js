//

const para = document.querySelector('p');

console.log(para.innerText);
para.innerText = 'ninjas are good';
para.innerText += 'ninjas are good'; // appends text


const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new extra text' // adding extra text
});

// adding content into html
const content = document.querySelector('.content');
// console.log(content.innerHTML);

content.innerHTML = '<h2>THIS IS A NEW HEADING</h2>'; // completely overrides the content, use += to append text


// example

const people = ['mario', 'luigi', 'john'];

people.forEach(person => {
    content.innerHTML += `<p> ${person}</p>`;
}); 
