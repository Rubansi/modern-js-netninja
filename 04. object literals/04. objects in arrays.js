// objects inside arrays


// the following is an example of array of objects
const blogs = [
    {title: 'why mac & cheese rules', likes: 30},
    {title: '10 things to make with marmite', likes: 50}
];

console.log(blogs)

let user = {
    name: 'Crystal',
    age: 30,
    email: 'crystal@example.com',
    location: 'berlin',
    blogs: ['the river between', 'a man of the people', 'the enemy of the people'],
    login: function (){
        console.log('the use is logged in');
    },
    logout: function(){
//  logout () {}, shorthand version of a regular expression, we remove the function keyword and the full colons
        console.log('the use is logged out');
    },
   logBlogs: function (){
// logBlogs(){} - this is a regular expression shorthand version
    console.log(this.blogs) //we access the blogs of the user
    console.log('this user has published the following blogs: ');
    this.blogs.forEach(blog => {
        console.log(blog.title, likes)
    });
   }
};


user.logBlogs();
console.log(this); //window function


