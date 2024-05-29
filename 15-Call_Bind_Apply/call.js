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



//===============================================================================================================================
//===============================================================================================================================
//===============================================================================================================================


/*

    Method Reuse
    With the call() method, you can write a method that can be used on different objects.


    All Functions are Methods
    In JavaScript all functions are object methods.
    If a function is not a method of a JavaScript object, it is a function of the global object 


    The call() method is a predefined JavaScript method.
    It can be used to invoke (call) a method with an owner object as an argument (parameter).

    With call(), an object can use a method belonging to another object.


*/


const newPerson = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }

  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }

  // This will return "John Doe":
  console.log(newPerson.fullName.call(person2));


  /*

    The call() Method with Arguments
    The call() method can accept arguments:


  */


    const admin = {
        fullName: function(city, country) {
        return (`${this.firstName} ${this.lastName} lives in ${city}, ${country}.`)
        }
      }
      
      const admin1 = {
        firstName:"John",
        lastName: "Doe"
      }
      
    console.log(admin.fullName.call(admin1, "Oslo", "Norway")); // John Doe lives in Oslo, Norway.


    // console.log(admin.fullName.bind(admin1, "Oslo", "Norway")); // GET ERROR


    /*

        The issue you're encountering is due to the way the bind method works in JavaScript compared to call.

            The call method immediately invokes the function with the given this context and arguments.
            The bind method, on the other hand, returns a new function with the given this context, but
            does not invoke it immediately.
            
            Here's a detailed explanation with your example:

            ---------- Using call:

            console.log(admin.fullName.call(admin1, "Oslo", "Norway")); // John Doe lives in Oslo, Norway.

            call is used to invoke admin.fullName immediately with admin1 as the this context and "Oslo", "Norway" as the arguments.

            ---------- Using bind:

            const boundFullName = admin.fullName.bind(admin1);
            console.log(boundFullName("Oslo", "Norway")); // John Doe lives in Oslo, Norway.

            bind creates a new function (boundFullName) with this set to admin1, but it does not call it.
            You need to call boundFullName with the appropriate arguments ("Oslo", "Norway") to get the desired output.
            So, to fix your code, you need to actually call the function returned by bind with the required arguments:


            const boundFullName = admin.fullName.bind(admin1);
            console.log(boundFullName("Oslo", "Norway")); // John Doe lives in Oslo, Norway.

            In summary, bind returns a new function that you need to call with arguments, whereas call invokes the function
            immediately with the specified this context and arguments.

    */


    const boundFullName = admin.fullName.bind(admin1);
    console.log(boundFullName("Oslo", "Norway"));  // John Doe lives in Oslo, Norway.
