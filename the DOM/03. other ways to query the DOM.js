// get an element by ID

const title = document.getElementBy('page.title');

console.log(title);

// get elements by their class name
const errors = document.getElementsByClassName('error')  // no need to use dots
console.log(errors) // outputs an html collection and not a node list, we cannot use the forEach function to iterate in the html collection


// get elements by their tag name
const paras = document.getElementsByTagName('p')
console.log(paras)