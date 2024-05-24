/*

In JavaScript, a promise is a placeholder (proxy) for the value of an ongoing operation.

You typically use a promise to manage situations where you must wait for the outcome of an operation. 
For example, uploading files to the server and awaiting the response of an API call, 
or just asking the user to choose a file from their computer.


What is a Promise?
A promise is simply a function that returns an Object which you can attach callbacks to.

The callbacks attached to a promise object will only get called when the operation completes. 
The callbacks will have to wait until the operation is fulfilled or rejected:

--- Before a promise finally settles (the promise either fulfills or gets rejected) it has to go through different states:

STATE	            DESCRIPTION	                                                                                CALLBCAK
pending	            Means the operation is still running and the promise is pending	-
fulfilled	        The operation was completed and it was successful	                                        .then()
rejected	        The operation was completed but there was an error	                                        .catch()
settled	            The promise has either resolved or rejected, either way this callback gets called	        .finally()

When a promise is created the initial state is pending. 
Then depending on the output of the operation the promise either gets fulfilled or rejected.

fetch(`some_api_url`).then((response) => {
  // This will get called when the promise fulfills
}).catch((error) => {
  // This will get called when the promise is rejected
}).finally(() => {
  // This will get called all the time
})


// Promise Chaining

the .then() callback is not really the end. That's because when you return value of a promise you get another promise. 
This becomes very useful when you want to run a series of asynchronous operations in order.



*/


// Practice

const promiseCreate = new Promise((resolve, reject) => {
    let error = true;
    if(!error){
        resolve({course: "JS", topic: "Promise"})
    }else{
        reject("Course Not found")
    }
})

// promiseCreate.then((courseTopic) => {
//     return courseTopic.topic
// }).then((topic) => {
//     console.log(topic);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => console.log("Always Run"))


//------------or

async function consumePromise(){
try {
   const response = await promiseCreate;
   console.log(response);
} catch (error) {
    console.log(error);
}
}
consumePromise();


