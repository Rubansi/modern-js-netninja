//removing elements from the DOM

// const ul = document.querySelector('ul');
// ul.remove(); 


// adding an event listener
button.addEventListener('click', () => {
    console.log('you clicked me')
});


const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e => {
        // console.log('item clicked');
        // console.log(e);
        // console.log(e.target); //use this often
        // console.log(item);
        e.target.style.textDecoration = 'line-through';

        // e.target.remove();

    })
});

