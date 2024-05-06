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