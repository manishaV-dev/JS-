// ================================ IIFE (Immediately Invoked Function Expression) ========================


/*

NOTES : 

        1. Declared functions are not executed immediately. They are "saved for later use", and will be executed later, 
            when they are invoked (called upon).

        2. A JavaScript function can also be defined using an expression.
           A function expression can be stored in a variable:


        An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 
        The name IIFE is promoted by Ben Alman.


        syntax : 

                (function () {
                    // …
                })();



                (() => {
                    // …
                })();



                (async () => {
                    // …
                })();


        USE CASES : 

                -- Avoid polluting the global namespace 

                If you have many global variables and functions, the JavaScript engine will only release the memory allocated 
                for them until the global object loses its scopes.
                                        As a result, the script may use the memory inefficiently. On top of that, 
                                        having global variables and functions will likely cause name collisions.

                One way to prevent the functions and variables from polluting the global object is to use immediately 
                invoked function expressions.

     
*/


//By placing functions and variables inside an IIFE, you can avoid polluting them to the global object:

