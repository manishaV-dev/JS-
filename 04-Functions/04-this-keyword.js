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

/*

    When the JavaScript engine executes the JavaScript code, it creates the global execution context. 
    The global execution context has two phases:

            1. Creation
            2. Execution


    When the JavaScript engine executes a script for the first time, it creates the global execution context. 
    During this phase, the JavaScript engine performs the following tasks:

        The Creation Phase: 
                i. Create the global object i.e., window in the web browser or global in Node.js.
                ii. Create the this object and bind it to the global object.
                iii. Set up a memory heap for storing variables and function references.
                iv. Store the function declarations in the memory heap and variables within the global execution context 
                    with the initial values as undefined.

        After the creation phase, the global execution context moves to the execution phase.

                During the execution phase, the JavaScript engine executes the code line by line, assigns the values 
                to variables, and executes the function calls.
                For each function call, the JavaScript engine creates a new function execution context.

                The function execution context is similar to the global execution context. But instead of creating the
                global object, the JavaScript engine creates the arguments object that is a reference to all the parameters 
                of the function:

                To keep track of all the execution contexts, including the global execution context and function execution 
                contexts, the JavaScript engine uses the call stack


*/


// =============================================== Call Stack =======================================================


/*

        A call stack is a way for the JavaScript engine to keep track of its place in code that calls multiple functions. 
        It has the information on what function is currently being run and what functions are invoked from within that function…

        Also, the JavaScript engine uses a call stack to manage execution contexts:

                ---- The global execution context
                ---- Function execution contexts

        The call stack works based on the last-in-first-out (LIFO) principle.

       -- When you execute a script, the JavaScript engine creates a global execution context and pushes it on top of the 
            call stack.

        -- Whenever a function is called, the JavaScript engine creates a function execution context for the function,   
            pushes it on top of the call stack, and starts executing the function.

        -- If a function calls another function, the JavaScript engine creates a new function execution context for the function 
            being called and pushes it on top of the call stack.

        -- When the current function completes, the JavaScript engine pops it off the call stack and resumes the 
            execution where it left off.

        -- The script will stop when the call stack is empty.





        Summery : 

        -- JavaScript engine uses a call stack to manage execution contexts.
        -- The call stack uses the stack data structure that works based on the LIFO (last-in-first-out) principle.
*/



//==================================================== Asynchronous JavaScript ==========================================

/*

    JavaScript is a single-threaded programming language. This means that the JavaScript engine has only one call stack. 
    Therefore, it only can do one thing at a time.

    When executing a script, the JavaScript engine executes code from top to bottom, line by line. 
    In other words, it is synchronous.


    Asynchronous means the JavaScript engine can execute other tasks while waiting for another task to be completed.

    For example, the JavaScript engine can:
                Request for data from a remote server.
                Display a spinner
                When the data is available, display it on the webpage.

    To do this, the JavaScript engine uses an event loop.

*/


/*

        The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run.
        Most typically, it is used in object methods, where this refers to the object that the method is attached to, 
        thus allowing the same method to be reused on different objects.

        this typically refers to the global object (in non-strict mode) or undefined (in strict mode). 

        Arrow functions differ in their handling of this: they inherit this from the parent scope at the time they are defined.
        This behavior makes arrow functions particularly useful for callbacks and preserving context. However, arrow functions 
        do not have their own this binding. Therefore, their this value cannot be set by bind(), apply() or call() methods, 
        nor does it point to the current object in object methods.


        Binding : In programming, a binding is an association of an identifier with a value. Not all bindings are variables — 
                    for example, function parameters and the binding created by the catch (e) block are not "variables" in the 
                    strict sense. 
                                In addition, some bindings are implicitly created by the language — for example, 
                                this and new.target in JavaScript.

        A binding is mutable if it can be re-assigned, and immutable otherwise; this does not mean that the value it holds is 
        immutable.


*/