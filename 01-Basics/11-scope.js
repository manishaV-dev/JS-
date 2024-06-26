/*

The scope is the current context of execution in which values and expressions are "visible". If a variable or expression 
is not in the current scope, it will not be available for use.
Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

JavaScript has the following kinds of scopes:

    1. Global scope: The default scope for all code running in script mode.
    2. Module scope: The scope for code running in module mode.
    3. Function scope: The scope created with a function.

    In addition, variables declared with 'let' or 'const' can belong to an additional scope:

    4. Block scope: The scope created with a pair of curly braces (a block).

    -- The variables that you declare inside a function are local to the function. They are called local variables.



*/

var c = 50;
if(true){
    let a = 5;
    const b = 6;
    var c = 8
}

// console.log(a); // a is not define
// console.log(b); // b in not define
// console.log(c); // 8



function exampleFunction() {
    const x = "declared inside function"; // x can only be used in exampleFunction
    console.log("Inside function"); 
    console.log(x);
  }
  
//   exampleFunction();
//   console.log(x); // x in not define
  

  let num1 = 200 // global scope
  if(true){
    let num1 = 10;
    const y = 100;
    console.log("Inner num1 - ", num1); // 10 -- block scope
  }
  console.log(num1); // 200


  // =============================================================================================================


  function one(){ // parent scope
    const username = "Manisha"
      function two(){ // child scope
        const website = "Youtube"
        console.log(username); // Manisha
      }
      two()
      // console.log(website); // website is not define
  }
  one();


  if(true){
    const username = "Rohit"
        if(username === "Rohit"){
          const website = "Youtube"
          console.log(`${username} is learning on ${website}`); // Rohit is working on Youtube
        }
        // console.log(website); Not working, because it is outside of its scope
  }

  // console.log(username); Not working, because it is outside of its scope




  // ======================================== Global variable leaks: the weird part of JavaScript ==========


  function getCounter() {
    counter = 10;
    return counter; // here, JavaScript engine creates the counter variable in the global scope.
}

console.log(getCounter()); // 10

/*

In this example, we assigned 10 to the counter variable without the var, let, or const keyword and then returned it.
Outside the function, we called the getCounter() function and showed the result in the console.
This issue is known as the leaks of the global variables.


To fix this “weird” behavior, you use the 'use strict' at the top of the script or at the top of the function:


*/