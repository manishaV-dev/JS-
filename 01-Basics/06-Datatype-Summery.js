/* 

On the basis of, How you can store your data in memory and how you can access them, there are two datatypes

1. Primitive data type -- call by value (Store in Call stack, where function executed)
2. Non-Primitive Type or Reference type -- call by Reference (Store in Heap, where objects are stored in memory)


1.. Primitive has 7 types

    i. String
    ii. Number
    iii. Boolean
    iv. Undefined
    v. Null
    vi. Symbol
    vii. BigInt

2.. Reference Type

    i. Object Literals
    ii. Arrays
    iii. Functions

*/

// Number Example
const score = 100;
const nextScore = 109.89;

// String Example
const myName = 'Manisha'

// Boolean Example
const isLoggedIn = false;

// Null Example
const checkTemp = null;
console.log(checkTemp); //object

// Undefined Example
let userEmail; 

// Symbol Example == Unique Number
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // False

// BigInt Example
const BigNumber = 876845235448104n;
console.log(typeof BigNumber); // bigint


// Reference Type == Generally the return data type of reference type is Object.

// Arrays
let heros = ['Thor', 'Ironman', 'Captain America', 'Black Widow']
console.log(typeof heros); // object

// Objects
let myObj = {
    name: 'Manisha',
    city: 'Kolkata',
    age: 26
}

console.log(typeof myObj); // object

// Function
const myFun = function(){
    console.log('Basic Function')
}
console.log(typeof myFun); // function object


//https://262.ecma-international.org/5.1/#sec-11.4