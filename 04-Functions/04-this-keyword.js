'use strict';

/*

when you inspect in browser console.log(this), it returns window objects but here in runtime env like node, bun, dino etc 
it retuns empty object {}


In JavaScript, the this keyword refers to an object.

The this keyword refers to different objects depending on how it is used:

           i. In an object method, this refers to the object.
           ii. Alone, this refers to the global object.
           iii. In a function, this refers to the global object.
           iv. In a function, in strict mode, this is undefined.
           v. In an event, this refers to the element that received the event.
           vi. Methods like call(), apply(), and bind() can refer this to any object.

this is not a variable. It is a keyword. You cannot change the value of this.

*/


// this in a Method -- When used in an object method, this refers to the object.
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function() {
      return (`My name is ${this.firstName} ${this.lastName}`)
    }
  };

  console.log(person.fullName())


// this Alone
//In strict mode, when used alone, this also refers to the global object:

let x = this;
console.log(x); // {} - [object Window]


// In a function, the global object is the default binding for this.

// this in a Function (Strict) -- JavaScript strict mode does not allow default binding.
// So, when used in a function, in strict mode, this is undefined.

function myFunction() {
    return this;
  }

  console.log(myFunction()); // [object Window]:
  console.log(myFunction()); // Undefined


// In HTML event handlers, this refers to the HTML element that received the event:

{/* <button onclick="this.style.display='none'">
  Click to Remove Me!
</button> */}




/*
In regular functions the this keyword represented the object that called the function, which could be the window,
the document, a button or whatever.

With arrow functions the this keyword always represents the object that defined the arrow function.


In arrow functions, JavaScript sets the 'this' lexically. This means that the arrow function doesn't create its own 
'execution context' but inherits the this from the outer function where the arrow function is defined.


In most cases, this means this will refer to the window object as well:

*/

//this means this will refer to the window object as well:
const show = () => this
console.log('arrow function this', show()); // {}

/*

if we try to implement an arrow function to it as an object method, we won't be able to access the object 
through the this keyword:

*/


const personNew = {
    name: 'Pedro',
    surname: 'Sanchez',
    // sayName: () => this.name + ' ' + this.surname
    sayName: function(){
        return (`${this.name} ${this.surname}`); // Pedro Sanchez
    }
}

// undefined when use arrow function
console.log(personNew.sayName()); // undefined undefined



// ============================================  execution context  ============================================================


// https://www.javascripttutorial.net/javascript-execution-context/


// JavaScript is a single-threaded programming language. This means that the JavaScript engine has only one call stack. Therefore, it only can do one thing at a time.