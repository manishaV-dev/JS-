// function Declaration - can be Access before declaration


console.log(addOne(4)); // 5
function addOne(num){
    return ++num; // num + 1
}
console.log(addOne(5)); // 6

//=================================================================================================


// Function Expression -- only Access after Declaration

// console.log(addTwo(6)); // 8 -- cannot access here, before initilization
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(6)); // 8



// this keyword -- refer the current context (scope)

// this keyword in Object

const user = {
    username : "Mohan",
    price : 999,
    welcomeMsg : function(){
        console.log(`${this.username}, welcome Back!`); 

        // Mohan, Welcome Back
        // ------ After change username to Rohit
        // Rohit, Welcome Back     
        
        console.log(this); // here in scope, this is refer to the current context

        // { username : "Mohan",price : 999, welcomeMsg: [function:welcomeMsg]
        // { username : "Rohit",price : 999, welcomeMsg: [function:welcomeMsg]
    }

    }


user.welcomeMsg();

// when change username
user.username = "Rohit"
user.welcomeMsg()
console.log(this); // {}

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


// this keyword in function

// function chai(){
//     let ing = "Milk"
//     console.log(this); // window global object
//     console.log(this.ing) // undefined
// }
// chai()


// const chai2 = function(){
//     let ing = "Suger"
//     console.log(this); // window global object
//     console.log(this.ing); //  undefined
// }

// chai2()


const chai3 = () => {
    let ing = "Suger"
    console.log(this); // {}
    console.log(this.ing); //  undefined
}
chai3();


// ================================ Arrow Function ========================

/*

In regular functions the this keyword represented the object that called the function, which could be the window,
the document, a button or whatever.

With arrow functions the this keyword always represents the object that defined the arrow function.

*/


const withOutarrFun = function(){
    return this;
}
console.log(withOutarrFun()); // Global objects

const withArrFun = () => this;
console.log(withArrFun()); {}


const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject); // true
console.log(globalObject); {}
console.log(foo()); {}


const addNum = (num1,num2) => {
    return num1 + num2
}
console.log(addNum(5,8)); // 13


// Implicit Return ==  without using {} and return keyword
const subTwo = (num1 ,num2) => num1 - num2;
console.log(subTwo(8,4)); // 4




// ================================ IIFE (Immediately Invoked Function Expression) ========================


/*

NOTES : 

        1. Declared functions are not executed immediately. They are "saved for later use", and will be executed later, 
            when they are invoked (called upon).

        
        2. A JavaScript function can also be defined using an expression.
           A function expression can be stored in a variable:

*/



