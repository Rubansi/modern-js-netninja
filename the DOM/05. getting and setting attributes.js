// example 1 - getting and setting values of an href attribute
const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText =  'the net ninja website';


// example 2 - getting and setting the value of a paragraph
const message = document.querySelector('p');

console.log(message.getAttribute('class'));
message.setAttribute('class', 'success');
