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


const content = document.querySelector('.content');
// console.log(content.innerHTML);

content.innerHTML = '<h2>this is a new heading</h2>';