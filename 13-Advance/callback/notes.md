----- Functions are Objects ----- ----- ----- ----- ----- 
        In Javascript, functions are first-class objects. As such, we can work with them in the same way we work with other objects, like assigning them to variables and passing them as arguments into other functions. 

----- Callback Functions ----- ----- ----- ----- ----- ----- 
        A callback function is a function that is passed as an argument to another function, to be “called back” at a later time. 
        A function that accepts other functions as arguments is called a 'higher-order function', which contains the logic for when the callback function gets executed. 
        It’s the combination of these two that allow us to extend our functionality.


        example :

        function createQuote(quote, functionToCall){ 
                let myQuote = "Like I always say, " + quote;
                functionToCall(myQuote); // 2
            }

        function logQuote(quote){
                console.log(quote);
            }

        createQuote("eat your vegetables!", logQuote); // 1

// Result in console: Like I always say, eat your vegetables!

======== Explanation

In the above example, 'createQuote' is the higher-order function, which accepts two arguments, the second one being the callback. 
The logQuote function is being used to pass in as our callback function. When we execute the createQuote function (1), notice that we are not appending parentheses to logQuote when we pass it in as an argument. This is because we do not want to execute our callback function right away, we simply want to pass the function definition along to the higher-order function so that it can be executed later.



Why use Callback functions?  ----- ----- ----- ----- ----- -----  ----- ----- ----- ----- ----- -----  ----- ----- ----- ----- -----
Most of the time we are creating programs and applications that operate in a synchronous manner. In other words, some of our operations are started only after the preceding ones have completed. Often when we request data from other sources, such as an external API, we don’t always know when our data will be served back. In these instances we want to wait for the response, but we don’t always want our entire application grinding to a halt while our data is being fetched. These situations are where callback functions come in handy.


            function serverRequest(query, callback){
                    setTimeout(function(){
                    let response = query + "full!";
                    callback(response);
                    },5000);
                }

            function getResults(results){
            console.log("Response from the server: " + results);
            }

            serverRequest("The glass is half ", getResults);

// Result in console after 5 second delay:
// Response from the server: The glass is half full!


----------------------------------------------------------------------------------------------------------------------

All programming languages have runtime engines that execute their code. In JavaScript, the runtime engine is single-threaded, which means that it runs code line by line or sequentially.

What is Asynchronous Programming?
Asynchronous programming is a technique that allows your program to run its tasks concurrently. You can compare asynchronous programming to a chef with multiple cookers, pots, and kitchen utensils. This chef will be able to cook various dishes at a time.

Asynchronous programming makes your JavaScript programs run faster, and you can perform asynchronous programming with any of these:

        1. Callbacks
        2. Promises
        3. Async/Await


1. Callbacks ----------------------------------------------------------------
A callback is a function used as an argument in another function. Callbacks allow you to create asynchronous programs in JavaScript by passing the result of a function into another function.


                function greet(name) {
                    console.log(`Hi ${name}, how do you do?`);
                }

                function displayGreeting(callback) {
                    let name = prompt("Please enter your name");
                    callback(name);
                };

                displayGreeting(greet);

==========================================================================================================================

Callback hell
Although callbacks make it easy to control and make your program asynchronous, you'll eventually run into a problem called callback hell while using them.

This problem arises when you perform multiple asynchronous tasks with callbacks, which might result in nesting callbacks in callbacks.


                    function greet(callback) {
                        setTimeout(function() {
                            console.log("Hi Musab");
                            callback();
                        }, 1000);
                    }

                    function introduce(callback) {
                        setTimeout(function() {
                            console.log("I am your academic advisor");
                            callback();
                        }, 1000);
                    }

                    function question(callback) {
                        setTimeout(function() {
                            console.log("Are you currently facing any challenge in your academics");;
                            callback();
                        }, 1000);
                    }

                    // callback hell
                    greet(function() {
                        introduce(function() {
                            question(function() {
                                console.log("Done");
                            });
                        });
                    });
