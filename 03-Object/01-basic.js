// -------------- Define an object == key value pair , key data type == string

// 1. Singleton == Object.Create() or new Object()

// 2. Non-singleton == by using Object Literals = {}


const mySym = Symbol("Key1")


const JSUser = {
    name: 'Manisha',
    email: 'manisha@google.com',
    "full Name" : 'Manisha Varma',
    //How to add a symbol in object
    [mySym] : "Key1",
    age: 26,
    location : 'Kolkata',

}

// Access object value
//1 . 
console.log(JSUser.name)
// console.log(JSUser.full Name); we can't use this as there is a space between key name, to access this type of key or Symbol we use []
//2.
console.log(JSUser["email"])
console.log(JSUser["full Name"]);
console.log(JSUser[mySym]);
console.log(JSUser);
/*
    {
    name: 'Manisha',
    email: 'manisha@google.com',
    "full Name" : 'Manisha Varma',
    age: 26,
    location : 'Kolkata',
    [Symbol(key1)]: 'Key1'
}

// console.log(Object.getOwnPropertySymbols(JSUser)); [Symbol(key1)]

*/

// Change or overwrite the value
JSUser.email = 'manisha@microsoft.com'
console.log(JSUser["email"]); // manisha@microsoft.com

// Freeze the object
Object.freeze(JSUser)
JSUser.age = 30;
console.log(JSUser["age"]); // 26



const user = {
    "Full Name" : "Sonam Saha",
    age: 30,
    email: 'sonam@gpt.com',
    course: "Web Development",
    location: 'Odisha'
}

// Add a function in object

user.greetings = function(){
    console.log("Hello world")
}

user.newGreetings = function(){
    console.log(`Hello ${this["Full Name"]}, your course is ${this.course}.`)
}

console.log(user.greetings()); // Hello world
console.log(user.newGreetings()); // Hello Sonam Saha, your course is web Development.


// Another way to declare object
const tinderUser = {};
tinderUser.id = '5697S'
tinderUser.name = "John Doe"
tinderUser.isLoggedIn = false;
// tinderUser.connection = ['Jimmy', 'Peter', 'Holy']

console.log(tinderUser); //{id:'5697S', name: "John Doe", isLoggedIn: false, connction : ['Jimmy', 'Peter', 'Holy']}
console.log(typeof tinderUser.connection); // object


// Objects within Object

const regularUser = {
    email : "anonymous@hotmail.com",
    details : {
        fullname : {
            firstName: 'Sheldon',
            lastName: 'Cooper'
        }
    }
}

console.log(regularUser.details.fullname.firstName); // sheldon


// Join two or more Object by using Object.assign(), spread operatore

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const allObj = Object.assign(obj1, obj2);
// console.log(allObj); // {1:"a", 2:"b",3:"c", 4:"d" }
// console.log(obj1); //  {1:"a", 2:"b, 3:"c", 4:"d" }
// console.log(obj2); // {3:"c", 4:"d"}


// when use {} -- it does not modify the original object 
// const allObj = Object.assign({}, obj1, obj2)
// console.log(allObj); // {1:"a", 2:"b",3:"c", 4:"d" }
// console.log(obj1); //  {1:"a", 2:"b"}
// console.log(obj2); //{ 3:"c", 4:"d" }

const spreadObj = {...obj1, ...obj2}
console.log(spreadObj); // {1:"a", 2:"b", 3:"c", 4:"d" }
console.log(obj1); // {1:"a", 2:"b"}


const users = [
    {
        id: 1,
        email : 'someone@gmail.com' ,
    },
    {
        id: 2,
        email: 'another@gpt.chat'
    },
    {
        id: 3,
        email: "newuser@yahoo.com"

    }
]

console.log(users[1].email); // another@gpt.chat

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // ['id', 'name', 'isLoggedIn']
console.log(Object.values(tinderUser)); // ['5697S', 'John Doe', 'False']
console.log(Object.keys(users[1])); // ['id', 'email']
console.log(Object.entries(tinderUser)); //[ ['id', '5697S'], ['name', 'John Doe'], ['isLoggedIn', 'False']]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true