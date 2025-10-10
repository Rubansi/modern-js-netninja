// querying the DOM,reaching into the DOM referencing an element and doing something with it later

// query the document and grab element(s)
// querySelector - select one element 
// querySelectAll - select all elements

const para = document.querySelector('div.error'); // selecting the elements using css selector, here we select a class names error inside a div
// understanding css selectors is very important is using the querySelector method


const errors = document.querySelectorAll('errors')
const par = document.querySelector('p'); // selecting the first p 

const heading = document.querySelector('body > h1'); 

const paras = document.querySelectorAll('p') // selecting all p tags in the document and storing them into a nodelist, not an array though
paras.forEac(para => {
    console.log(paras)
})

console.log(paras[2]); // accessing an item in a nodelist

console.log(par);


