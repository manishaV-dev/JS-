/*

Hoisting is JavaScript's default behavior of moving declarations to the top.
In JavaScript, a variable can be used before it has been declared.



---- Variables defined with let and const are hoisted to the top of the block, but not initialized.
                    Using a let variable before it is declared will result in a ReferenceError.
                    The variable is in a "temporal dead zone" from the start of the block until it is declared:

--- Using a const variable before it is declared, is a syntax error, so the code will simply not run.

--- Arrow functions are not hoisted. They must be defined before they are used.

*/



console.log(addOne(4)); // 5
function addOne(num){
    return ++num; // num + 1
}
console.log(addOne(5)); // 6


