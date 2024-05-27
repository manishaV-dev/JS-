function SetuserName(username){
    this.username = username;
}

function CreateUser(username, email, password){
    // here we take reference of the function
    SetuserName(username);
    this.email = email;
    this.password = password
}
const userOne = new CreateUser("Manish", "mani@fb.com", 5654)
console.log(userOne); // {email: 'mani@fb.com', password: 5654}

// here username is not printed : 
// 'this' keyword which refer the current context , here it is not refer because we define a function within a function
// to solve this issue we can use 'call' method


function CreateUser2(username, email, password){
    // here this refer to Current execution context of CreateUser2
    SetuserName.call(this, username);
    this.email = email;
    this.password = password
}

const userTwo = new CreateUser2("Manisha", "manisha@fb.com", 695654)
console.log(userTwo); // {username: 'Manisha', email: 'manisha@fb.com', password: 695654}

//==========================================================================================================================
//==========================================================================================================================

/*
        In JavaScript, call, apply, and bind are methods used to control the context (this value) in which a function is executed. 

        1. call() : The call method calls a function with a specified this value and arguments provided individually.

        syntax : func.call(thisArg, arg1, arg2, ...)

*/

function greet(greeting, punctuation) {
    console.log(`${greeting} , ${this.name} ${punctuation}`);
}
const person = { name: 'Alice' };
greet.call(person, 'Hello', '!');
// In this example, this inside greet refers to person, so the output will be:


//==========================================================================================================================


function Product(name, price){
    this.name = name;
    this.price = price;
}

function Pizza(name, price){
    Product.call(this, name, price);
    this.category = "Pizza";
}

function Toy(name, price){
    Product.call(this, name, price);
    this.category = "Toy";
}

const pizza = new Pizza("Margherita", 599);
const toy = new Toy('Robot', 450)

console.log(pizza)
console.log(toy)


function sleep(){
    let reply = `${this.animal}, typically sleep between, ${this.sleepDuration}`;
    console.log(reply);
}

let obj = {
    animal : 'I',
    sleepDuration : '6 and 8 hours'
}

sleep.call(obj)
// output : I, typically sleep between, 6 and 8 hours