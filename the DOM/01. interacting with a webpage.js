// the DOM is used to interact with html doc using javascript
// the DOM is ideally a document object created by the browser to model the html page - so its an object called document i.e. the document object

// since its an objects it has various methods. these are inbuilt methods that we can use out of the box

// the DOM also describes how the html looks visually, the root is html tag, then head and body tag etc - its like an hirachical tree of nodes

// so we use the tree of nodes access them and manipulate the html document using javascript using certain methods

// querying the DOM,reaching into the DOM referencing an element and doing something with it later

const para = document.querySelector('div.error'); // selecting the elements using css selector, here we select a class names error inside a div

const par = document.querySelector('p');

console.log(para);

