// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('you clicked me')
// });


const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', () => {
        console.log('item clicked');
    })
});