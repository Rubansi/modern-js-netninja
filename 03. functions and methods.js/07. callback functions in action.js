const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'china'];

let html = ``;

people.forEach(function(person){
    //create html template
    html += `<li style ="color: purple">${person}</li>`

});

console.log(html);