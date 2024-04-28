"use strict";  // treat all js code as a newer verison of JS

// alert(3+3); not working as we are using Nodejs not browser


console.log("hii"); console.log('Bye') // Not a good practise to write this type of code
// Code should be Readable and future proof 

// https://tc39.es/ecma262/



// Primitive Data Type
 
let fullName = "Manisha" // String
let age = 28 // Number
let state; // Undefined
let isLoggedIn = true; // Boolean
let temperature = null; // Null


// String = " "
// Number - Range (2**64 - 2**53 + 3)
// BigInt
// Undefined -- Value not assing
// Boolean -- True/False
// Null -- Standalone Value 
// Symbol -- Unique

console.log(typeof fullName); // string
console.log(typeof null) // Object

// Object