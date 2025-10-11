const ul = document.querySelector('ul');
// ul.remove();

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    // ul.append(li); // ads the element to the end of the list
    ul.prepend(li); // adds the item to the start of the list
});



