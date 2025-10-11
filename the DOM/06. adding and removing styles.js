// adding and removing styles

const title = document.querySelector('h1');  

// title.setAttribute('style', 'margin: 50px;'); // overrides the inline css style in html

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson'

title.style.fontSize = '60px';
title.style.margin = '' // removes the earlier property