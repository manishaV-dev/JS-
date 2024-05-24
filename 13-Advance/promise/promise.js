// How to create promise :
// 1
// const promiseOne = new Promise(function(resolve, reject){
//     // Do async task
//     // DBConnect, Cryptography, network
//     setTimeout(() => {
//         console.log("Asyn task is completed");
//         resolve();
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consume");
// })

// log : Asyn task is completed
//       Promise consume

//===============================================================================================================================

// 2
// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Asyn Task 2 Complete")
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("Promise 2 Consumed");
// })

//===============================================================================================================================

// 3 -- Data consumption : pass data in resolve -- here we pass object but can pass any data type like array etc.

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve({username : "Manisha", email : "manisha@Promise"})
//     }, 1000);
// })

// promiseThree.then(function(userDetails){
//     console.log(userDetails); // {username: 'Manisha', email: 'manisha@Promise'}
// })

//===============================================================================================================================

// 4.

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             resolve({username : "Manisha", password: 123456})
//         }else{
//             reject("ERROR: Something Went Wrong")
//         }

//     },1000)
// })

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((myUsername) => {
//     console.log(myUsername)
// }).catch((err) => {
//     console.log(err);
// })

// if error = true : ERROR: Something Went Wrong
// if error = false : {username: 'Manisha', password: 123456} Manisha

// with finally 

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((myUsername) => {
//     console.log(myUsername)
// }).catch((err) => {
//     console.log(err);
// }).finally(() => console.log("The promise is either resolved or rejected"))

// if error = true : ERROR: Something Went Wrong -- The promise is either resolved or rejected
// if error = false : {username: 'Manisha', password: 123456} -- Manisha -- The promise is either resolved or rejected

//===============================================================================================================================

// 5. async - await

const promiseFive = new Promise( (resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){ // if there is no error then resolve 
            resolve({course : "Javascript", price: 999})
        }else{ // otherwise reject promise by throwing error
            reject("ERROR: JS")
        }

    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (err) {
        console.log(err); 
    }
}
consumePromiseFive()

//  if error = true : ERROR: JS
//  if error = false : {course: 'Javascript', price: 999}


//===============================================================================================================================


// Fetch -- try catch

// async function getUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error :", error);
//     }
// }

// getUser();

// const data = response.json();  -- In console : promise (pending)
// const data = await response.json(); -- In console : (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}


//===============================================================================================================================

// fetch --- then-catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data); // (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
})
.catch((error) => {
    console.log("ERROR:" , error);
})