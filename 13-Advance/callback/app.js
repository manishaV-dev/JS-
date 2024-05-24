// synchronous Programing
// let a = prompt("What is your name?")
// let b = prompt("what is your age?")
// let c = prompt("what is your favorite color?")
// let details = `My name is ${a} and I am ${b} years old and my favorite color is ${c}`
// console.log(details);


// asynchronous 

// console.log("start");
// setTimeout(() => {
//     console.log("start after 3 sec");
// }, 3000);
// console.log("end");


// Callback

// without callback
// function loadScript(src){
//     let script = document.createElement('script')
//     script.src = src;
//     document.head.appendChild(script)
// }
// loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js')
// script is loaded



// function loadScript(src){
//     let script = document.createElement('script')
//     script.src = src;
//     script.onload = function(){
//         console.log("Script Loaded", src);
//     }
//     document.head.appendChild(script)
// }
// loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js')


// with callback

// function loadScript(src, callback){
//     let script = document.createElement('script')
//     script.src = src;
//     script.onload = function(){
//         console.log("Script Loaded", src);
//         callback();
//     }
//     document.head.appendChild(script)
// }

// function hello(){
//     console.log("Hello");
// }

// loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' , hello)

// Script Loaded https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js
// Hello


// handling error in callback

// function loadScript(src, callback){
//     let script = document.createElement('script')
//     script.src = src;
//     script.onload = function(){
//         console.log("Script Loaded", src);
//         callback(null, src);
//     }

//     script.onerror = function(){
//         console.log("Error loading with SRC : " , src);
//         callback(new Error('SRC got some error'))
//     }

//     document.head.appendChild(script)
// }

// function hello(error, src){
//     if(error){
//         console.log(error);
//         return;
//     }
//     console.log("Hello" , src);
// }

// loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' , hello)

// Error loading with SRC :  https://cdn.jsdeldddivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js
// Error: SRC got some error



// function greet(name) {
//     console.log(`Hi ${name}, how do you do?`);
// }

// function displayGreeting(callback) {
//     let name = prompt("Please enter your name");
//     callback(name);
// };

// displayGreeting(greet);


// ===================================================== Callback hell =====================================================

// function greet(callback) {
//     setTimeout(function() {
//         console.log("Hi Musab");
//         callback();
//     }, 1000);
// }

// function introduce(callback) {
//     setTimeout(function() {
//         console.log("I am your academic advisor");
//         callback();
//     }, 1000);
// }

// function question(callback) {
//     setTimeout(function() {
//         console.log("Are you currently facing any challenge in your academics");;
//         callback();
//     }, 1000);
// }

// // callback hell
// greet(function() {
//     introduce(function() {
//         question(function() {
//             console.log("Done");
//         });
//     });
// });


// ====================================================== Promise Example ====================================================

// let myName;

// function displayGreeting() {
//     myName = prompt("Please enter your name");
// }

// let promise = new Promise(function(resolve, reject) {
//     // the producing code
//     displayGreeting();
//     resolve(myName)
// });

// function greet(result) {
//     console.log(`Hi ${result}, how do you do?`);
// }

// promise.then(
//     // the consuming code
//     result => greet(result),
//     error => alert(error)
// );



// function greet() {
//     return new Promise(resolve => {
//         setTimeout(function() {
//             console.log("Hi Musab");
//             resolve();
//         }, 1000);
//     });  
// }

// function introduce() {
//     return new Promise(resolve => {
//         setTimeout(function() {
//             console.log("I am your academic advisor");
//             resolve();
//         }, 1000);
//     });
// }

// function question() {
//     return new Promise(resolve => {
//         setTimeout(function() {
//             console.log("Are you currently facing any challenge in your academics");;
//             resolve();
//         }, 1000);
//     });
// }

// greet()
//     .then(() => introduce())
//     .then(() => question())
//     .then(() => console.log("Done"))
//     .catch(error => console.error("An error occured: ", error));




// ============================================= async-await =====================================================

/*

async/await is syntactic sugar for creating a Promise — it makes creating promises easier.

To make a function asynchronous using async/await, you have to write the async keyword before the function declaration. 
Then, you can write the await keyword before the producing code's execution call.


*/


let fullName;

function displayGreeting() {
    fullName = prompt("Please enter your name");
    return fullName;
}

function greet(result) {
    console.log(`Hi ${result}, how do you do?`);
}

async function greeting() {
    // the producing code
    let result = await displayGreeting();
    // the consuming code
    greet(result);
};

greeting();


// error handling

// async function greeting() {
//     try {
//         let result = await displayGreeting();
//         greet(result);
//     } catch(err) {
//         console.error(err)
//     }
// };