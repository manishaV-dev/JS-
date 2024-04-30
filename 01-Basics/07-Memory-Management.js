/*

What is memory management?
The practice of managing and coordinating memory in your software is known as memory management. It makes sure that memory 
blocks are correctly managed and distributed so that the application and other processes that are currently running have
the memory they require to complete their tasks.


Unlike C language which uses malloc() and free() to allocate and free up memory respectively, is a manual memory management system.
But in JS, memory management is handled automatically by runtime environment typically the Js engine in web browsers or Node.js.
This is why JavaScript is a garbage-collected language. 

JavaScript removes the pain of memory management by automatically allocating its memory and freeing it up (garbage collection) 
when not in use.

==========================================================================================================================

Memory life cycle:

The 3 phases or parts of the memory life cycle which are the same for all programming languages are;

    1. Allocation: When we declare a variable, we need to allocate the memory. In JavaScript, this is handled automatically.
                   
    2. Using the allocated memory.

    3. Releasing the memory when not in use anymore. In JavaScript, this is handled automatically 
       (it is called JavaScript garbage collection).


===========================================================================================================================

JavaScript engine storages (stack and heap memory)

JavaScript engines store their data in two places; the Stack Memory and the Heap Memory.

1. Stack Memory - Static Memory allocation: is a type of data structure that uses the Last-in-First-out (LIFO) manner, 
                  to store static data. Because of its fixed size, known during compile time by the engine, it is static.
                  It stores primitive values (like strings, number, Boolean, null, undefined, symbol, BigInt.) and 
                  references to objects and functions.

                  It is static because value doesnot change, when we need a return value it make a copy of a value then return 
                  to us.

2. Heap Memory – Dynamic memory allocation: Heap is another way of storing data in memory. This is used for storing objects 
                 (in this context here, our objects mean both object and functions) in memory.
                 The JavaScript heap doesn’t allocate a fixed amount of memory like the stack does, instead, it allocates
                 more space during run time i.e the size is known at run time and there is no limit for its object memory.

                 It is dynamic so, when we need return value it give us a reference value. Reference value means if we update
                 and change the value it remains within the original value.

*/


// stack Example

let myInstaId = "manishaV"
let anotherId = myInstaId;
anotherId = "Coder_bunny"

console.log(myInstaId); // manishaV
console.log(anotherId); // Coder_bunny


// Heap Example

let userOne = {
    name: "Rajesh",
    age: 26,
    email: 'rajesh@gmail.com'
}

let userTwo = userOne;
userTwo.email = "example@google.com"

console.log(userOne.email); // example@google.com
console.log(userTwo.email); // example@google.com




// https://www.turing.com/kb/handling-memory-management-in-javascript