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