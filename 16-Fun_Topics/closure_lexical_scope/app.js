/*
    A closure gives you access to an outer function's scope from an inner function. In JavaScript, 
    closures are created every time a function is created, at function creation time.


    The word lexical refers to the fact that lexical scoping uses the location where a variable is declared 
    within the source code to determine where that variable is available. Nested functions have access to variables 
    declared in their outer scope.

*/

// example : Lexical scoping

function outer(){
    let username = "Manisha"
    // console.log(secret); //  ReferenceError: secret is not defined

    function innerChild(){
        let secret = "manjh378"
        console.log("Inner Function" , username); // run : Inner Function Manisha
    }

    function innerChildTwo(){
        console.log("Inner Function two", username); // Inner Function two Manisha
        // console.log(secret); // ReferenceError: secret is not defined
    }

    innerChild();
    innerChildTwo();
}
outer();
// console.log(username); // reference error -- can not access because it is out of its scope(functional scope)



// Closure

