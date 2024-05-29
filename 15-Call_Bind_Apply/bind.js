//==========================================================================================================================
//==========================================================================================================================

/*
        3. bind() : The bind method creates a new function that, when called, has its this value set to the provided value, 
        with a given sequence of arguments preceding any provided when the new function is called.

        syntax : func.bind(thisArg, arg1, arg2, ...)

*/

function greet(greeting, punctuation) {
    console.log(`${greeting} , ${this.name} ${punctuation}`);
}

const person = { name: 'Alice' };
const greetPerson = greet.bind(person);
greetPerson('Hello', '!'); // Hello , Alice !

// In this example, this inside greetPerson refers to person


//===========================================================================================================================
//===========================================================================================================================

/*

    JavaScript Function bind() --- Function Borrowing

    1. With the bind() method, an object can borrow a method from another object.


*/

// 1. Example

const user = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return (`${this.firstName} ${this.lastName}`)
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let userName = user.fullName.bind(member);
  console.log(userName()); // Hege Nilsen


  /*

    Preserving this -----  Sometimes the bind() method has to be used to prevent losing this.

    When a function is used as a callback, 'this' keyword is lost.
    The bind() method solves this problem.

  */

    const newPerson = {
        firstName:"John",
        lastName: "Doe",
        display: function () {
            document.querySelector("#demo").innerHTML = (`${this.firstName} ${this.lastName}`)
        }
      }
      
    // setTimeout(newPerson.display, 3000); // undefined undefined

    let display = newPerson.display.bind(newPerson)
    setTimeout(display, 3000); // after 3sec John Doe
    


/*

What is this?
In JavaScript, the this keyword refers to an object.

The this keyword refers to different objects depending on how it is used:

        - In an 'object' method, 'this' refers to the 'object'.

        - Alone, 'this' refers to the 'global object'.

        - In a 'function', 'this' refers to the 'global object'.

        - In a 'function', in strict mode, 'this' is undefined.

        - In an 'event', 'this' refers to the element 'that received the event'.

        - Methods like call(), apply(), and bind() can refer 'this' to any object.

Note: 
        'this' is not a variable. It is a keyword. You cannot change the value of this.

*/
